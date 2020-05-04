import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from "@ngrx/store";
import {LoginAction} from "../../shared/store/actions";
import {selectLoggedInUser} from "../../shared/store/selectors";
import {ThemeService} from "../../shared/services/theme.service";

@Component({
	selector: 'app-page-login',
	templateUrl: './page-login.component.html',
	styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

	mock: any = {
		username: '',
		password: ''
	};

	constructor(private themeService: ThemeService, private store$: Store<any>, private router: Router) { }

	ngOnInit() {
		this.store$.select(selectLoggedInUser).subscribe(data => {
			if (data) {
				this.router.navigate(['/dashboard']);
			}
		});
	}

	onSubmit(){
		this.store$.dispatch(new LoginAction(this.mock));
	}
}
