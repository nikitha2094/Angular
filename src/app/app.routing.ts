

import { Routes, RouterModule, Data } from '@angular/router';
import { MainLayoutComponent } from "./shared/layout/app-layout/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layout/auth-layout.component";
import { ModuleWithProviders } from "@angular/core";

import { AuthGuard } from './auth/guards/auth.guard';


export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [

            { path: '', redirectTo: 'home', pathMatch: 'full' },

            {
                path: 'home',
                loadChildren: 'app/home/home.module#HomeModule',
                data: { roles: ['USER', 'ADMIN'], canActivate: [AuthGuard] }
            },
            {
                path: 'contact',
                loadChildren: 'app/contact/contact.module#ContactModule',
            },
            {
                path: 'profile',
                loadChildren: 'app/profile/profile.module#ProfileModule',

            },
        ]
    },

    {
        path: 'login',
        loadChildren: './auth/login/login.module#LoginModule'
    },
    { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/auth/auth.module#AuthModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
