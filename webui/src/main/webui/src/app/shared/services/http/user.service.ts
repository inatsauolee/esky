import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) {
  }

  getAllUsers() {
    return this._http.get('');
  }

  getUserById(id: any) {
    // return this._http.post(environment.endpoint + api.programByCedent, cedentRequest);
    return this._http.post('', id);
  }

}
