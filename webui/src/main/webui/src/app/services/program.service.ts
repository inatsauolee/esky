import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProgramService {
  constructor(private _http: HttpClient) {
  }

  getAllPrograms() {
    return this._http.get('');
  }

  getProgramById(id: number) {
  }

  getProgramByCedent(cedentRequest: any) {
    // return this._http.post(environment.endpoint + api.programByCedent, cedentRequest);
    return this._http.post('', cedentRequest);
  }

}
