import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from '../../shared/services/sidebar.service';
import {
  AddCourseAction,
  DeleteCourseAction,
  LoadCoursesAction, LoadCoursesByCreatorAction,
  LoadCoursesByFilterAction, LoadCoursesByStudentAction
} from "../../shared/store/actions";
import {Store} from "@ngrx/store";
import {getAllCourses} from "../../shared/store/selectors/course.selectors";
import {Course} from "../../shared/entities/course";
import {NgbCalendar, NgbDateAdapter, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {selectLoggedInUser} from "../../shared/store/selectors";
import {User} from "../../shared/entities/user";
import {Pageable} from "../../shared/entities/pageable";
import {Direction, Sort} from "../../shared/constant/tools";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public sidebarVisible: boolean = true;
  public activeTab: number = 0;

  tabChange(num: number){
    if(this.activeTab != num){
      this.activeTab = num;
      this.loadCources();
    }
  }

  model1: string;
  model2: string;


  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }

  public loggedInUser: User;
  public pageable: Pageable = new Pageable('0', '9', Sort.updated, Direction.desc);
  public courseList: Course[] = [];
  public filterValue: string = '';
  public courseToAdd: Course = new Course(null, '', '', '', 'Not started', new Date(), '', 'None', null, []);
  Number = Number;

  constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, private store$: Store<any>, private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private modalService: NgbModal) {
  }

  ngOnInit() {
    if(localStorage.getItem('currentUser')) {
      this.loggedInUser =  JSON.parse(localStorage.getItem('currentUser'));
    }
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
      this.store$.dispatch(new LoadCoursesByStudentAction({pageable: this.pageable, filterValue: this.filterValue, idStudent: this.loggedInUser.id}));
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
    this.courseToAdd.creator = this.loggedInUser.id;
    this.courseToAdd.updator = this.loggedInUser.id;
    this.store$.dispatch(new AddCourseAction(this.courseToAdd));
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
}
