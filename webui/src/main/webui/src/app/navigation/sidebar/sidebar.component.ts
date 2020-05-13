import {Component, Input, Output, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {LogoutAction} from "../../shared/store/actions";
import {User} from "../../shared/entities/user";
import {getCoursesCount} from "../../shared/store/selectors/course.selectors";
import {getClassesCount} from "../../shared/store/selectors/class.selectors";

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

	@Input() sidebarVisible: boolean = true;
	@Input() navTab: string = "menu";
	@Input() currentActiveMenu;
	@Input() currentActiveSubMenu;
	@Output() changeNavTabEvent = new EventEmitter();
	@Output() activeInactiveMenuEvent = new EventEmitter();
    public themeClass: string = "theme-cyan";
    public darkClass: string = "";
    private ngUnsubscribe = new Subject();

    public loggedInUser: User;
    public coursesCount: number;
    public classesCount: number;
    public usersCount: number;

	constructor(private themeService: ThemeService, private store$: Store<any>, private router: Router) {
        this.themeService.themeClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(themeClass => {
			this.themeClass = themeClass;
        });
        this.themeService.darkClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(darkClass => {
            this.darkClass = darkClass;
        });
    }

    ngOnInit(): void {
        if (localStorage.getItem('currentUser')) {
            this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        this.store$.select(getCoursesCount).pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => this.coursesCount = data);
        this.store$.select(getClassesCount).pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => this.classesCount = data);
    }
    
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

	changeNavTab(tab: string) {
		this.navTab = tab;
	}

	activeInactiveMenu(menuItem: string) {
		this.activeInactiveMenuEvent.emit({ 'item': menuItem });
	}

	changeTheme(theme:string){
		this.themeService.themeChange(theme);
    }
    
    changeDarkMode(darkClass: string) {
        this.themeService.changeDarkMode(darkClass);
    }

    logout() {
        this.store$.dispatch(new LogoutAction());
        this.router.navigate(['/auth/login']);
    }

    redirectToFAQ(question: string) {
	    localStorage.setItem('FAQ_Question', question);
        this.router.navigate(['/faq']);
    }
}
