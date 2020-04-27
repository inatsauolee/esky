import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {User} from "../../entities/user";

@Injectable()
export class AuthenticationService {

    currentUser: User;
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('http://localhost:3000/auth', { username, password })
            .pipe(map(data => {
                this.currentUser = data.currentUser;
                // login successful if there's a jwt token in the response
                if (data && data.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('JWT', JSON.stringify(data.token));
                }
                return this.currentUser;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('JWT');
    }

    public get loggedIn(): boolean {
        return (localStorage.getItem('JWT') !== null);
    }
}