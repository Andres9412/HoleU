import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


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
  constructor() { }

  ngOnInit() {
  }
  onSubmit(i){
    console.log(i.value)
    this.scheduleAvailable = i.value;
    this.scheduleAvailable = Object.keys(this.scheduleAvailable).map((key) => {
      this.scheduleDays.push(key)
      return this.scheduleAvailable[key]
    });
    this.fucion(this.scheduleAvailable)
  }
  fucion(schedule){
    for (let i = 0; i < this.scheduleDays.length; i++) {
        if(schedule[i] == ""){
          schedule[i] = false
        }
      this.scheduleFull[i] = [this.scheduleDays[i],schedule[i]]
    }

  }
}
