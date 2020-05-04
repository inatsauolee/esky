import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {api, environment} from "../../../../environments/environment";

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(environment.endpoint + api.auth, { username, password });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('JWT');
    }

    public get loggedIn(): boolean {
        return (localStorage.getItem('JWT') !== null);
    }
}