import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login/page-login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { routing } from './authentication.routing';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageLockscreenComponent } from './page-lockscreen/page-lockscreen.component';
import { PageForgotPasswordComponent } from './page-forgot-password/page-forgot-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageForbiddonErrorComponent } from './page-forbiddon-error/page-forbiddon-error.component';
import { PageIsErrorComponent } from './page-is-error/page-is-error.component';
import { PageTryLaterComponent } from './page-try-later/page-try-later.component';
import { PagesModule } from '../pages/pages.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {SharedModule} from "../shared/shared.module";

@NgModule({
	declarations: [PageLoginComponent, AuthenticationComponent, PageRegisterComponent, PageLockscreenComponent, PageForgotPasswordComponent, PageNotFoundComponent, PageForbiddonErrorComponent, PageIsErrorComponent, PageTryLaterComponent],
	imports: [
		CommonModule,
		routing,
		PagesModule,
        RouterModule,
		SharedModule,
        FormsModule
	]
})
export class AuthenticationModule { }
