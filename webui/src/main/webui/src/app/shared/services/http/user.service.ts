import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) {
  }

  getAllUsers() {
    return this._http.get('');
  }

  getUserById(id: number) {
  }

  getUserByCedent(cedentRequest: any) {
    // return this._http.post(environment.endpoint + api.programByCedent, cedentRequest);
    return this._http.post('', cedentRequest);
  }

}
