import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from '../../shared/services/theme.service';
import {LogoutAction} from "../../shared/store/actions";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	providers: [NgbDropdownConfig]
})
export class HeaderComponent implements OnInit {

	// Properties

	@Input() showNotifMenu: boolean = false;
    @Input() showToggleMenu: boolean = false;
    @Input() darkClass:string = "";
	@Output() toggleSettingDropMenuEvent = new EventEmitter();
	@Output() toggleNotificationDropMenuEvent = new EventEmitter();

	constructor(private config: NgbDropdownConfig, private store$: Store<any>, private themeService: ThemeService, private router: Router) {
		config.placement = 'bottom-right';
	}

	ngOnInit() {
	}

	toggleSettingDropMenu() {
		this.toggleSettingDropMenuEvent.emit();
	}

	toggleNotificationDropMenu() {
		this.toggleNotificationDropMenuEvent.emit();
	}

	toggleSideMenu(){
		this.themeService.showHideMenu();
	}

	logout() {
		this.store$.dispatch(new LogoutAction());
		this.router.navigate(['/auth/login']);
	}

}
