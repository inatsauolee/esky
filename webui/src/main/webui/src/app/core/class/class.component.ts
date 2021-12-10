import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {User} from "../../shared/entities/user";
import {Pageable} from "../../shared/entities/pageable";
import {Direction, Sort} from "../../shared/constant/tools";
import {NgbCalendar, NgbDateAdapter, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Store} from "@ngrx/store";
import {SidebarService} from "../../shared/services/sidebar.service";
import {Category} from "../../shared/entities/category";
import {AddCategoryAction, LoadCategoriesAction} from "../../shared/store/actions/core.actions";
import {getAllCategories} from "../../shared/store/selectors/core.selectors";

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
  public classList: Category[] = [];
  public filterValue: string = '';
  public classToAdd: Category = new Category(null, '', '');

  constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, private store$: Store<any>, private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private modalService: NgbModal) {
  }

  ngOnInit() {
    if(localStorage.getItem('currentUser')) {
      this.loggedInUser =  JSON.parse(localStorage.getItem('currentUser'));
    }
    this.loadClasses();
    this.store$.select(getAllCategories).subscribe(data => {
      this.classList = data;
    });
  }

  loadClasses() {
    this.store$.dispatch(new LoadCategoriesAction( this.pageable));
  }

  addClass() {
    this.classToAdd.creator = this.loggedInUser;
    this.classToAdd.updator = this.loggedInUser.id;
    this.store$.dispatch(new AddCategoryAction(this.classToAdd));
    this.classToAdd = new Category(null, '', '');
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
