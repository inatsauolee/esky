import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Pageable} from "../../entities/pageable";
import {Class} from "../../entities/class";
import {api, environment} from "../../../../environments/environment";
import {Course} from "../../entities/course";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get('');
  }

  getUsersByRole(pageable: Pageable, filterValue: string, role: string) {
    const params = new HttpParams()
        .set('page', pageable.page)
        .set('size', pageable.size)
        .set('direction', pageable.direction)
        .set('sort', pageable.sort)
        .set('filterValue', filterValue);
    return this.http.get<Class[]>(environment.endpoint + api.user + api.role + role, {params});
  }

  getUserById(id: any) {
    // return this._http.post(environment.endpoint + api.programByCedent, cedentRequest);
    return this.http.post('', id);
  }

  getUserByCreator(pageable: Pageable, filterValue: string, idCreator: number): any {
    const params = new HttpParams()
        .set('page', pageable.page)
        .set('size', pageable.size)
        .set('direction', pageable.direction)
        .set('sort', pageable.sort)
        .set('filterValue', filterValue);
    return this.http.get<Course[]>(environment.endpoint + api.user + api.all + api.creator + idCreator, {params});
  }

  getUserByFilter(pageable: Pageable, filterValue: string): any {
    const params = new HttpParams()
        .set('page', pageable.page)
        .set('size', pageable.size)
        .set('direction', pageable.direction)
        .set('sort', pageable.sort)
        .set('filterValue', filterValue);
    return this.http.get<Course[]>(environment.endpoint + api.user + api.all + api.filter, {params});
  }

    getUserCount(type: any, id: any) {
      return this.http.get<number>(environment.endpoint + api.user + '/' + type + api.count + id);
    }
}
