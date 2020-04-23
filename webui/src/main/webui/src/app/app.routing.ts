import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    { path: '', loadChildren: () => import('app/core/core.module').then(m => m.CoreModule) },
    { path: 'authentication', loadChildren: () => import('app/authentication/authentication.module').then(m => m.AuthenticationModule) }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });