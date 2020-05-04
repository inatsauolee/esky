import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {selectLoggedInUser} from "../../shared/store/selectors";
import {User} from "../../shared/entities/user";
import {Pageable} from "../../shared/entities/pageable";
import {Direction, Sort} from "../../shared/constant/tools";
import {Class} from "../../shared/entities/class";
import {
  AddClassAction,
  LoadClassesAction,
  LoadClassesByCreatorAction,
  LoadClassesByFilterAction
} from "../../shared/store/actions";
import {NgbCalendar, NgbDateAdapter, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Store} from "@ngrx/store";
import {SidebarService} from "../../shared/services/sidebar.service";
import {getAllClasses} from "../../shared/store/selectors/class.selectors";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  public sidebarVisible: boolean = true;
  public activeTab: number = 0;

  tabChange(num: number){
    if(this.activeTab != num){
      this.activeTab = num;
      this.loadClasses();
    }
  }

  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }


  public loggedInUser: User;
  public pageable: Pageable = new Pageable('0', '9', Sort.updated, Direction.desc);
  public classList: Class[] = [];
  public filterValue: string = '';
  public classToAdd: Class = new Class(null, '', '', '', '', []);

  constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, private store$: Store<any>, private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private modalService: NgbModal) {
  }

  ngOnInit() {
    console.log('init')
    if(localStorage.getItem('currentUser')) {
      this.loggedInUser =  JSON.parse(localStorage.getItem('currentUser'));
    }
    this.store$.select(selectLoggedInUser).subscribe(data => {
      if(data) {
        this.loggedInUser = data;
      }
    });
    this.loadClasses();
    this.store$.select(getAllClasses).subscribe(data => {
      this.classList = data;
    });
  }

  loadClasses() {
    if(this.activeTab === 0) {
      this.store$.dispatch(new LoadClassesByCreatorAction({pageable: this.pageable, filterValue: this.filterValue, idCreator: this.loggedInUser.id}));
    } else if (this.activeTab === 1) {
      if(this.filterValue === '') {
        this.store$.dispatch(new LoadClassesAction(this.pageable));
      } else {
        this.store$.dispatch(new LoadClassesByFilterAction({pageable: this.pageable, filterValue: this.filterValue}));
      }
    }
  }

  addClass() {
    this.classToAdd.creator = this.loggedInUser;
    this.classToAdd.updator = this.loggedInUser.id;
    this.store$.dispatch(new AddClassAction(this.classToAdd));
  }

  filter() {
    this.loadClasses();
  }

  openModal(content, size) {
    this.modalService.open(content, { size: size });
  }

  prevPage() {
    if(Number.parseInt(this.pageable.page) > 0) {
      this.pageable.page = (Number.parseInt(this.pageable.page) - 1).toString();
      this.loadClasses();
    }
  }

  nextPage() {
    this.pageable.page = (Number.parseInt(this.pageable.page) + 1).toString();
    this.loadClasses();
  }

}
