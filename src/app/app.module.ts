import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import { routing } from './app.routes';
import { ModalModule } from "ngx-bootstrap/modal";


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ReportsComponent } from './reports/reports.component'



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    routing,
    ModalModule.forRoot(),
    Angular2FontawesomeModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
