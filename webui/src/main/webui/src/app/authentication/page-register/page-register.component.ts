import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../../shared/entities/user";
import {ToastrService} from "ngx-toastr";
import {Store} from "@ngrx/store";
import {AddUserAction} from "../../shared/store/actions";
import * as bcrypt from 'bcryptjs';

@Component({
    selector: 'app-page-register',
    templateUrl: './page-register.component.html',
    styleUrls: ['./page-register.component.css']
})
export class PageRegisterComponent implements OnInit {

    public userToAdd: User = new User();

    constructor(private toastr: ToastrService, private store$: Store<any>, private router: Router) { }

    ngOnInit() {
    }

    register() {
        const salt = bcrypt.genSaltSync(10);
        const pass = bcrypt.hashSync(this.userToAdd.password, salt);
        this.userToAdd.password=pass;
        this.userToAdd.enabled = true;
        this.store$.dispatch(new AddUserAction(this.userToAdd));
        this.router.navigate(['/auth/login']);
    }

}
