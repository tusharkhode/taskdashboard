import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

  constructor(private _http: Http) { }

  getAllTask() {
    return this._http.get('../assets/data.json').map(
      (response) => response.json()
    )
  }

}
