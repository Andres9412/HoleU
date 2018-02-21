import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedule:any = []
  s6:any = []
  s6_5:any = []
  s7:any = []
  s7_5:any = []
  s8:any = []
  s8_5:any = []
  s9:any = []
  s9_5:any = []
  s10:any = []
  s10_5:any = []
  s11:any = []
  s11_5:any = []
  s12:any = []
  s12_5:any = []
  s13:any = []
  s13_5:any = []
  s14:any = []
  s14_5:any = []
  s15:any = []
  s15_5:any = []
  s16:any = []
  s16_5:any = []
  s17:any = []
  s17_5:any = []

  constructor(
    private _scheduleService:ScheduleService
  ) {
    this.schedule = this._scheduleService.getOwnSchedule()
    this.divide(this.schedule)
   }

  ngOnInit() {
  }
  divide(schedule){
    for (let i = 0; i < schedule.length; i++) {
        if (schedule[i].day.endsWith("y1") ) {
            this.s6.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y1.5") ) {
            this.s6_5.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y2") ) {
            this.s7.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y2.5") ) {
            this.s7_5.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y3") ) {
            this.s8.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y3.5") ) {
            this.s8_5.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y4") ) {
            this.s9.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y4.5") ) {
            this.s9_5.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y5") ) {
            this.s10.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y5.5") ) {
            this.s10_5.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y6") ) {
            this.s11.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y6.5") ) {
            this.s11_5.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y7") ) {
            this.s12.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y7.5") ) {
            this.s12_5.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y8") ) {
            this.s13.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y8.5") ) {
            this.s13_5.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y9") ) {
            this.s14.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y9.5") ) {
            this.s14_5.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y10") ) {
            this.s15.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y10.5") ) {
            this.s15_5.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y11") ) {
            this.s16.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y11.5") ) {
            this.s16_5.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y12") ) {
            this.s17.push(schedule[i])
        }
        if (schedule[i].day.endsWith("y12.5") ) {
            this.s17_5.push(schedule[i])
        }
    }

  }
}
