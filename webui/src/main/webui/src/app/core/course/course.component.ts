import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SidebarService} from '../../shared/services/sidebar.service';
import {
  AddCourseAction,
  DeleteCourseAction, LoadClassesByCreatorAction,
  LoadCoursesAction,
  LoadCoursesByCreatorAction,
  LoadCoursesByFilterAction
} from "../../shared/store/actions";
import {Store} from "@ngrx/store";
import {getAllCourses} from "../../shared/store/selectors/course.selectors";
import {Course} from "../../shared/entities/course";
import {NgbCalendar, NgbDateAdapter, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {selectLoggedInUser} from "../../shared/store/selectors";
import {User} from "../../shared/entities/user";
import {Pageable} from "../../shared/entities/pageable";
import {Direction, Sort} from "../../shared/constant/tools";
import {getAllClassesForMultiSelect} from "../../shared/store/selectors/class.selectors";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  selectedClasses = [];
  classes = [];
  repeatOptions = [
    {value: 'None', label: 'None'},
    {value: 'Daily', label: 'Daily'},
    {value: 'Weekly', label: 'Weekly'},
    {value: 'Monthly', label: 'Monthly'}
    ];

  public sidebarVisible: boolean = true;
  public activeTab: number = 1;

  tabChange(num: number){
    if(this.activeTab != num){
      this.activeTab = num;
      this.loadCources();
    }
  }

  mask = '00:00';


  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }

  public loggedInUser: User;
  public pageable: Pageable = new Pageable('0', '9', Sort.updated, Direction.desc);
  public courseList: Course[] = [];
  public filterValue: string = '';
  public courseToAdd: Course = new Course(null, '', '', '', 'Not started', new Date(), '', '', 'None', null, []);

  constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, private store$: Store<any>, private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private modalService: NgbModal) {
  }

  ngOnInit() {
    if(localStorage.getItem('currentUser')) {
      this.loggedInUser =  JSON.parse(localStorage.getItem('currentUser'));
    }
    this.store$.select(getAllClassesForMultiSelect).subscribe(data => {
      if(data) {
        this.classes = data;
      }
    });
    this.store$.dispatch(new LoadClassesByCreatorAction({pageable: this.pageable, filterValue: '', idCreator: this.loggedInUser.id}));
    this.store$.select(selectLoggedInUser).subscribe(data => {
      if(data) {
        this.loggedInUser = data;
      }
    });
    this.loadCources();
    this.store$.select(getAllCourses).subscribe(data => {
      this.courseList = data;
    });
  }

  loadCources() {
    if(this.activeTab === 0) {
      this.store$.dispatch(new LoadCoursesByCreatorAction({pageable: this.pageable, filterValue: this.filterValue, idCreator: this.loggedInUser.id}));
    } else if (this.activeTab === 1) {
      if(this.filterValue === '') {
        this.store$.dispatch(new LoadCoursesAction(this.pageable));
      } else {
        this.store$.dispatch(new LoadCoursesByFilterAction({pageable: this.pageable, filterValue: this.filterValue}));
      }
    }
  }

  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }

  addCourse() {
    this.courseToAdd.creator = this.loggedInUser;
    this.courseToAdd.updator = this.loggedInUser.id;
    this.courseToAdd.startTime = this.getTime(this.courseToAdd.startTime);
    this.courseToAdd.endTime = this.getTime(this.courseToAdd.endTime);
    this.courseToAdd.classes = this.selectedClasses.map(c => { return {id: c}});
    this.store$.dispatch(new AddCourseAction(this.courseToAdd));
    this.courseToAdd  = new Course(null, '', '', '', 'Not started', new Date(), '', '', 'None', null, []);

  }

  getTime(time: string) {
    return time.substring(0, 2) + ':' + time.substring(2, 4);
  }

  openModal(content, size) {
    this.modalService.open(content, { size: size });
  }

  deleteCourse(id: number) {
    this.store$.dispatch(new DeleteCourseAction(id));
  }

  filter() {
    this.loadCources();
  }

  join(link: string) {
    window.open(link);
  }

  prevPage() {
    if(Number.parseInt(this.pageable.page) > 0) {
      this.pageable.page = (Number.parseInt(this.pageable.page) - 1).toString();
      this.loadCources();
    }
  }

  nextPage() {
    this.pageable.page = (Number.parseInt(this.pageable.page) + 1).toString();
    this.loadCources();
  }

  profile(id: any) {
    
  }

  dateSelect(event: any, param: string) {
    this.courseToAdd[param] = new Date(event.year + '-' + event.month + '-' + event.day);
  }
}
