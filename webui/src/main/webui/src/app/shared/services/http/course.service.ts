import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Course} from "../../entities/course";
import {api, environment} from "../../../../environments/environment";
import {User} from "../../entities/user";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class CourseService {

  constructor(private http: HttpClient) {
  }

  getCountCourses() {
    return this.http.get<number>(environment.endpoint + api.course + api.count);
  }

  getAllCourses(page: string, size: string, direction: string, sort: string) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('direction', direction)
      .set('sort', sort);
    return this.http.get<Course[]>(environment.endpoint + api.course + api.all, { params });
  }

  getCoursesByFilter(page: string, size: string, filterValue: string): any {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('filterValue', filterValue);
    return this.http.get<Course[]>(environment.endpoint + api.course + api.all + api.filter, { params });
  }

  getCourseByCreator(creator: User) {
    return this.http.get<Course>(environment.endpoint + api.course + api.get + creator);
  }

  getCourseById(id: number) {
    return this.http.get<Course>(environment.endpoint + api.course + api.get + id);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(environment.endpoint + api.course + api.save, course, httpOptions);
  }

  updateCourse(course: Course): Observable<Course> {
    console.log(JSON.stringify(course.id));
    return this.http.put<Course>(environment.endpoint + api.course + api.update + course.id, course, httpOptions);
  }

  deleteCourse(id: number) {
    return this.http.delete<Course>(environment.endpoint + api.course + api.delete + id);
  }
}