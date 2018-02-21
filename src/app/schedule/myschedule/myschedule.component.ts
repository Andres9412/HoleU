import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScheduleService } from '../schedule.service';


@Component({
  selector: 'app-myschedule',
  templateUrl: './myschedule.component.html',
  styleUrls: ['./myschedule.component.css']
})
export class MyscheduleComponent implements OnInit {

  scheduleAvailable:any = []
  scheduleDays: any =[]
  scheduleFull: any =[]
  i:number = 0
  constructor(
    private _scheduleService:ScheduleService
  ) { }

  ngOnInit() {
  }
  onSubmit(i){
    this.scheduleAvailable = i.value;
    this.scheduleAvailable = Object.keys(this.scheduleAvailable).map((key) => {
      this.scheduleDays.push(key)
      return this.scheduleAvailable[key]
    });
    this.combine(this.scheduleAvailable)
    this._scheduleService.addSchedule(this.scheduleFull)
      .subscribe( res => console.log(res))
  }
  combine(schedule){

    for (let i = 0; i < this.scheduleDays.length; i++) {
        if(schedule[i] == ""){
          schedule[i] = false
        }
      this.scheduleFull[i] = {day: this.scheduleDays[i],available:schedule[i]}
    }
  }
}
