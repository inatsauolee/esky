import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageLockscreenComponent } from './page-lockscreen/page-lockscreen.component';
import { PageForgotPasswordComponent } from './page-forgot-password/page-forgot-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageForbiddonErrorComponent } from './page-forbiddon-error/page-forbiddon-error.component';
import { PageIsErrorComponent } from './page-is-error/page-is-error.component';
import { PageTryLaterComponent } from './page-try-later/page-try-later.component';
import { PageMaintananceComponent } from '../pages/page-maintanance/page-maintanance.component';

const routes: Routes = [
    {
        path: '',
        component: AuthenticationComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: PageLoginComponent, data: { title: 'Esky | Login' } },
            { path: 'register', component: PageRegisterComponent, data: { title: 'Esky | Register' } },
            { path: 'lockscreen', component: PageLockscreenComponent, data: { title: 'Esky | Lock Screen' } },
            { path: 'forgot-password', component: PageForgotPasswordComponent, data: { title: 'Esky | Forgot Password' } },
            { path: 'page-404', component: PageNotFoundComponent, data: { title: 'Page-404 :: Lucid Angular' } },
            { path: 'page-403', component: PageForbiddonErrorComponent, data: { title: 'Page-403 :: Lucid Angular' } },
            { path: 'page-500', component: PageIsErrorComponent, data: { title: 'Page-500 :: Lucid Angular' } },
            { path: 'page-503', component: PageTryLaterComponent, data: { title: 'Page-503 :: Lucid Angular' } },
            { path: 'page-maintanance', component: PageMaintananceComponent, data: { title: 'maintanance :: Lucid Angular' } },
        ]
    }
];

export const routing = RouterModule.forChild(routes);