import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';
import { ReportsComponent } from '../reports/reports.component';

export const DASHBOARD_ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'reports', component: ReportsComponent }
];