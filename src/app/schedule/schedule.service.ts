import { Injectable } from '@angular/core';
import { User } from '../auth/user.model';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import * as urljoin from 'url-join';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class ScheduleService {

  private scheduleUrl:string;
  schedule:any[] = []
  constructor(
    private http:Http
  ) {
    this.scheduleUrl = urljoin(environment.apiUrl,'schedule')
  }
  addSchedule( schedule ){
    const body = JSON.stringify(schedule);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.scheduleUrl, body, {headers})
      .map( (res) => {
        const resp = res.json()
        console.log(resp)
        return resp
      } )
  }
  getOwnSchedule(){
    return this.http.get(this.scheduleUrl)
      .map( res => {
        return res.json()
      })
  }
}
