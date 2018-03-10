import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DashboardService } from './dashboard.service';
import { DatePipe } from '@angular/common';
import { ModalDirective, ModalModule } from 'ng2-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  addTaskForm: FormGroup;
  allTasks: any = [];
  todaysTask: any = [];
  lastSevenDayTask: any = [];
  today: Date = new Date();
  nameArray: any = [];
  filteredName: any = [];
  lastSeven: Date = new Date(this.today.getTime() - (7 * 24 * 60 * 60 * 1000));
  @ViewChild('addTasksModal') public addTasksModal: ModalDirective;

  constructor(
    private _service: DashboardService,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initialization();
    this._service.getAllTask().subscribe(data => {
      this.allTasks = data;
      this.covertTimestamp();
    });
  };

  initialization() {
    this.addTaskForm = this._fb.group({
      userName: ['', [Validators.required]],
      taskName: ['', [Validators.required]],
      bucket: ['', [Validators.required, Validators.pattern(/^(?:4(?:\.0)?|[1-3](?:\.[0-9])?|0?(\.[0-9]))$/)]]
    });
  }

  covertTimestamp() {
    for (let date of this.allTasks) {
      date.values.taskCreateTimestamp = new Date(date.values.taskCreateTimestamp);
    }
    this.nameArray = this.allTasks.map(item => item.values.userName);
    this.countTasks();
  };

  countTasks() {
    this.todaysTask = this.allTasks.filter(item => {
      if (item.values.taskCreateTimestamp == this.today)
        return true;
      return false;
    });

    this.lastSevenDayTask = this.allTasks.filter(item => {
      if (this.lastSeven <= item.values.taskCreateTimestamp)
        return true;
      return false;
    });

    this.filteredName = this.nameArray.filter((item, pos) => {
      return this.nameArray.indexOf(item) == pos;
    });
  };

  openTasksModal() {
    this.addTasksModal.show();
  };

  taskSubmit() {
    console.log(this.addTaskForm.value);
    this.addTaskForm.value.taskCreateTimestamp = this.today;
    let object = { values: {} };
    object.values = this.addTaskForm.value;
    this.allTasks.push(object);
    this.countTasks();
    this.addTaskForm.reset();
    this.addTasksModal.hide();

  };

  closeModal() {
    this.addTaskForm.reset();
    this.addTasksModal.hide();
  };

}