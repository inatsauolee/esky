import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { EChartOption } from 'echarts';
import { SidebarService } from '../../shared/services/sidebar.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {User} from "../../shared/entities/user";

@Component({
	selector: 'app-page-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

	public sidebarVisible: boolean = true;
	public loggedInUser: User;
	public fragment: string = "settings";
    private ngUnsubscribe = new Subject();

	constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.fragment.pipe(takeUntil(this.ngUnsubscribe)).subscribe((fragment: string) => {
			if (fragment) {
				this.fragment = fragment;
			}
		});
	}

	ngOnInit() {
		if (localStorage.getItem('currentUser')) {
			this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
		}
	}

	ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

	toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
	}

}
