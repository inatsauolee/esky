import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EChartOption } from 'echarts';
import { SidebarService } from '../../shared/services/sidebar.service';
import {User} from "../../shared/entities/user";
import {Pageable} from "../../shared/entities/pageable";
import {Direction, Sort} from "../../shared/constant/tools";
import {getAllClassesForMultiSelect} from "../../shared/store/selectors/class.selectors";
import {
  LoadClassesByCreatorAction,
  LoadCoursesAction,
  LoadCoursesByCreatorAction,
  LoadCoursesByFilterAction, LoadUserByCreatorAction, LoadUserByFilterAction
} from "../../shared/store/actions";
import {getAllUsers, selectLoggedInUser} from "../../shared/store/selectors";
import {getAllCourses} from "../../shared/store/selectors/course.selectors";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-contact-grid',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public sidebarVisible: boolean = true;
  public activeTab: number = 0;
  public loggedInUser: User;
  public pageable: Pageable = new Pageable('0', '9', Sort.id, Direction.desc);
  public userList: User[] = [];
  public filterValue: string = '';

  constructor(private store$: Store<any>, private sidebarService: SidebarService, private cdr: ChangeDetectorRef) {
  }

  tabChange(num: number){
    if(this.activeTab != num){
      this.activeTab = num;
      this.loadUsers();
    }
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
    this.loadUsers();
    this.store$.select(getAllUsers).subscribe(data => {
      this.userList = data;
    });
  }

  loadUsers() {
    if(this.activeTab === 0) {
      this.store$.dispatch(new LoadUserByCreatorAction({pageable: this.pageable, filterValue: this.filterValue, idCreator: this.loggedInUser.id}));
    } else if (this.activeTab === 1) {
      this.store$.dispatch(new LoadUserByFilterAction({pageable: this.pageable, filterValue: this.filterValue}));
    }
  }

  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }

}
