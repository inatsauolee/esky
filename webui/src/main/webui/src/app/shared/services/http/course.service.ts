import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from "../../entities/course";
import {api, environment} from "../../../../environments/environment";
import {User} from "../../entities/user";
import {Pageable} from "../../entities/pageable";

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

    getAllCourses(pageable: Pageable) {
        const params = new HttpParams()
            .set('page', pageable.page)
            .set('size', pageable.size)
            .set('direction', pageable.direction)
            .set('sort', pageable.sort);
        return this.http.get<Course[]>(environment.endpoint + api.course + api.all, {params});
    }

    getCoursesByFilter(pageable: Pageable, filterValue: string): any {
        const params = new HttpParams()
            .set('page', pageable.page)
            .set('size', pageable.size)
            .set('direction', pageable.direction)
            .set('sort', pageable.sort)
            .set('filterValue', filterValue);
        return this.http.get<Course[]>(environment.endpoint + api.course + api.all + api.filter, {params});
    }

    getCoursesByCreator(pageable: Pageable, filterValue: string, idCreator: number): any {
        const params = new HttpParams()
            .set('page', pageable.page)
            .set('size', pageable.size)
            .set('direction', pageable.direction)
            .set('sort', pageable.sort)
            .set('filterValue', filterValue);
        return this.http.get<Course[]>(environment.endpoint + api.course + api.all + api.creator + idCreator, {params});
    }

    getMyCoursesByCreator(idCreator: number): any {
        return this.http.get<Course[]>(environment.endpoint + api.course + api.mine + api.creator + idCreator);
    }

    getCoursesByStudent(pageable: Pageable, filterValue: string, idStudent: number): any {
        const params = new HttpParams()
            .set('page', pageable.page)
            .set('size', pageable.size)
            .set('direction', pageable.direction)
            .set('sort', pageable.sort)
            .set('filterValue', filterValue);
        return this.http.get<Course[]>(environment.endpoint + api.course + api.all + api.student + idStudent, {params});
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

    getCourseCount(type: any, id: any) {
        return this.http.get<number>(environment.endpoint + api.course + '/' + type + api.count + id);
    }
}