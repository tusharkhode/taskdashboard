import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DASHBOARD_ROUTES } from './dashboard/dashboard.routes';

import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: SidebarComponent, children: DASHBOARD_ROUTES }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);