import {Component, AfterViewInit, OnInit, OnDestroy} from '@angular/core';
import {SidebarService} from '../../shared/services/sidebar.service';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {ThemeService} from '../../shared/services/theme.service';
import {Title} from '@angular/platform-browser';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Store} from "@ngrx/store";
import {GetClassCountAction, GetCourseCountAction, GetUserCountAction} from "../../shared/store/actions";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit, OnInit, OnDestroy {

    public title = 'esky';
    public isStopLoading: boolean = false;
    public showNotifMenu: boolean = false;
    public showToggleMenu: boolean = false;
    public navTab: string = "menu";
    public currentActiveMenu = "light";
    public currentActiveSubMenu;
    public themeClass: string = "theme-blue";
    public smallScreenMenu = "";
    public darkClass: string = "";
    private ngUnsubscribe = new Subject();

    constructor(private store$: Store<any>, public sidebarService: SidebarService, private router: Router, private activatedRoute: ActivatedRoute, private themeService: ThemeService, private titleService: Title) {
        this.activatedRoute.url.pipe(takeUntil(this.ngUnsubscribe)).subscribe(url => {
            this.isStopLoading = false;
            this.getActiveRoutes();
        });

        this.themeService.themeClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(themeClass => {
            this.themeClass = themeClass;
        });

        this.themeService.smallScreenMenuShow.pipe(takeUntil(this.ngUnsubscribe)).subscribe(showMenuClass => {
            this.smallScreenMenu = showMenuClass;
        });

        this.themeService.darkClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(darkClass => {
            this.darkClass = darkClass;
        });
    }

    ngOnInit() {
        const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
        if (currentUser) {
            // this.changeTheme(currentUser.role);
            // this.changeDarkMode(currentUser.role);
            this.store$.dispatch(new GetCourseCountAction({type: this.getType(currentUser.role), id: currentUser.id}))
            this.store$.dispatch(new GetClassCountAction({type: this.getType(currentUser.role), id: currentUser.id}))
            this.store$.dispatch(new GetUserCountAction({type: this.getTypeForUserCount(currentUser.role), id: currentUser.id}))
        }
        let that = this;
        this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map((route) => {
                that.themeService.hideMenu();
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter((route) => route.outlet === 'primary')
            .mergeMap((route) => route.data)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((event) => this.titleService.setTitle(event['title']));
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    toggleNotificationDropMenu() {
        this.showNotifMenu = !this.showNotifMenu;
    }

    toggleSettingDropMenu() {
        this.showToggleMenu = !this.showToggleMenu;
    }

    ngAfterViewInit() {
        this.isStopLoading = true;
    }

    getActiveRoutes() {
        let segments: Array<string> = this.router.url.split('/');
        this.currentActiveMenu = segments[2];
        this.currentActiveSubMenu = segments[3];
    }

    activeInactiveMenu($event) {
        if ($event.item && $event.item == this.currentActiveMenu) {
            this.currentActiveMenu = "";
        } else {
            this.currentActiveMenu = $event.item;
        }
    }

    changeTheme(role: string) {
        let theme = 'theme-orange';
        if (role === 'S') {
            theme = 'theme-green';
        } else if (role === 'T') {
            theme = 'theme-blue';
        }
        this.themeService.themeChange(theme);
    }

    changeDarkMode(role: string) {
        let darkClass = '';
        if (role === 'A') {
            darkClass = 'full-dark';
        }
        this.themeService.changeDarkMode(darkClass);
    }

    getType(role: string) {
        return role === 'S' ? 'student' : 'creator';
    }

    getTypeForUserCount(role: string) {
        return role === 'T' ? 'student' : 'creator';
    }

}
