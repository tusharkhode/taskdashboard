import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  allTasks: any = [];
  constructor(private _service: DashboardService) { }

  ngOnInit() {
    this._service.getAllTask().subscribe(data => {
      this.allTasks = data;
    });
  }

}
