import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Class} from "../../entities/class";
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
export class ClassService {

    constructor(private http: HttpClient) {
    }

    getCountClasses() {
        return this.http.get<number>(environment.endpoint + api.class + api.count);
    }

    getAllClasses(pageable: Pageable) {
        const params = new HttpParams()
            .set('page', pageable.page)
            .set('size', pageable.size)
            .set('direction', pageable.direction)
            .set('sort', pageable.sort);
        return this.http.get<Class[]>(environment.endpoint + api.class + api.all, {params});
    }

    getClassesByFilter(pageable: Pageable, filterValue: string): any {
        const params = new HttpParams()
            .set('page', pageable.page)
            .set('size', pageable.size)
            .set('direction', pageable.direction)
            .set('sort', pageable.sort)
            .set('filterValue', filterValue);
        return this.http.get<Class[]>(environment.endpoint + api.class + api.all + api.filter, {params});
    }

    getClassesByCreator(pageable: Pageable, filterValue: string, idCreator: number): any {
        const params = new HttpParams()
            .set('page', pageable.page)
            .set('size', pageable.size)
            .set('direction', pageable.direction)
            .set('sort', pageable.sort)
            .set('filterValue', filterValue);
        return this.http.get<Class[]>(environment.endpoint + api.class + api.all + api.creator + idCreator, {params});
    }

    getMyClassesByCreator(idCreator: number): any {
        return this.http.get<Class[]>(environment.endpoint + api.class + api.mine + api.creator + idCreator);
    }

    getClassesByStudent(pageable: Pageable, filterValue: string, idStudent: number): any {
        const params = new HttpParams()
            .set('page', pageable.page)
            .set('size', pageable.size)
            .set('direction', pageable.direction)
            .set('sort', pageable.sort)
            .set('filterValue', filterValue);
        return this.http.get<Class[]>(environment.endpoint + api.class + api.all + api.student + idStudent, {params});
    }

    getClassByCreator(creator: User) {
        return this.http.get<Class>(environment.endpoint + api.class + api.get + creator);
    }

    getClassById(id: number) {
        return this.http.get<Class>(environment.endpoint + api.class + api.get + id);
    }

    addClass(aClass: Class): Observable<Class> {
        return this.http.post<Class>(environment.endpoint + api.class + api.save, aClass, httpOptions);
    }

    updateClass(aClass: Class): Observable<Class> {
        console.log(JSON.stringify(aClass.id));
        return this.http.put<Class>(environment.endpoint + api.class + api.update + aClass.id, aClass, httpOptions);
    }

    deleteClass(id: number) {
        return this.http.delete<Class>(environment.endpoint + api.class + api.delete + id);
    }

    getClassCount(type: any, id: any) {
        return this.http.get<number>(environment.endpoint + api.class + '/' + type + api.count + id);
    }
}