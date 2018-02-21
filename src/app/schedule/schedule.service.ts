import { Injectable } from '@angular/core';

@Injectable()
export class ScheduleService {

  schedule:any = []
  constructor() {

    this.schedule = [
      {day: "monday1", available: false},
      {day: "tuesday1", available: false},
        {day: "wednesday1", available: false},
      {day: "thursday1", available: false},
      {day: "friday1", available: false},
        {day: "monday1.5", available: false},
        {day: "tuesday1.5", available: false},
        {day: "wednesday1.5", available: false},
        {day: "thursday1.5", available: false},
        {day: "friday1.5", available: false},
        {day: "monday2", available: false},
        {day: "tuesday2", available: false},
        {day: "wednesday2", available: false},
        {day: "thursday2", available: false},
        {day: "friday2", available: false},
        {day: "monday2.5", available: false},
        {day: "tuesday2.5", available: false},
       {day: "wednesday2.5", available: false},
       {day: "thursday2.5", available: false},
      {day: "friday2.5", available: false},
      {day: "monday3", available: false},
      {day: "tuesday3", available: false},
      {day: "wednesday3", available: false},
      {day: "thursday3", available: false},
      {day: "friday3", available: false},
      {day: "monday3.5", available: false},
      {day: "tuesday3.5", available: false},
      {day: "wednesday3.5", available: false},
      {day: "thursday3.5", available: false},
      {day: "friday3.5", available: false},
      {day: "monday4", available: true},
      {day: "tuesday4", available: false},
      {day: "wednesday4", available: false},
      {day: "thursday4", available: false},
      {day: "friday4", available: false},
      {day: "monday4.5", available: true},
      {day: "tuesday4.5", available: false},
      {day: "wednesday4.5", available: false},
      {day: "thursday4.5", available: false},
      {day: "friday4.5", available: false},
      {day: "monday5", available: false},
      {day: "tuesday5", available: true},
      {day: "wednesday5", available: false},
      {day: "thursday5", available: false},
      {day: "friday5", available: false},
      {day: "monday5.5", available: false},
      {day: "tuesday5.5", available: true},
      {day: "wednesday5.5", available: false},
      {day: "thursday5.5", available: false},
      {day: "friday5.5", available: false},
      {day: "monday6", available: false},
      {day: "tuesday6", available: false},
      {day: "wednesday6", available: true},
      {day: "thursday6", available: false},
      {day: "friday6", available: false},
      {day: "monday6.5", available: false},
      {day: "tuesday6.5", available: false},
      {day: "wednesday6.5", available: false},
      {day: "thursday6.5", available: true},
      {day: "friday6.5", available: false},
      {day: "monday7", available: false},
      {day: "tuesday7", available: false},
      {day: "wednesday7", available: false},
      {day: "thursday7", available: true},
      {day: "friday7", available: false},
      {day: "monday7.5", available: true},
      {day: "tuesday7.5", available: false},
      {day: "wednesday7.5", available: false},
      {day: "thursday7.5", available: true},
      {day: "friday7.5", available: false},
      {day: "monday8", available: true},
      {day: "tuesday8", available: false},
      {day: "wednesday8", available: false},
      {day: "thursday8", available: false},
      {day: "friday8", available: true},
      {day: "monday8.5", available: true},
      {day: "tuesday8.5", available: false},
      {day: "wednesday8.5", available: false},
      {day: "thursday8.5", available: false},
      {day: "friday8.5", available: false},
      {day: "monday9", available: false},
      {day: "tuesday9", available: false},
      {day: "wednesday9", available: false},
      {day: "thursday9", available: true},
      {day: "friday9", available: false},
      {day: "monday9.5", available: true},
      {day: "tuesday9.5", available: true},
      {day: "wednesday9.5", available: false},
      {day: "thursday9.5", available: true},
      {day: "friday9.5", available: false},
      {day: "monday10", available: false},
      {day: "tuesday10", available: true},
      {day: "wednesday10", available: false},
      {day: "thursday10", available: false},
      {day: "friday10", available: false},
      {day: "monday10.5", available: false},
      {day: "tuesday10.5", available: false},
      {day: "wednesday10.5", available: false},
      {day: "thursday10.5", available: false},
      {day: "friday10.5", available: false},
      {day: "monday11", available: false},
      {day: "tuesday11", available: false},
      {day: "wednesday11", available: false},
      {day: "thursday11", available: false},
      {day: "friday11", available: false},
      {day: "monday11.5", available: false},
      {day: "tuesday11.5", available: false},
      {day: "wednesday11.5", available: false},
      {day: "thursday11.5", available: false},
      {day: "friday11.5", available: false},
      {day: "monday12", available: false},
      {day: "tuesday12", available: false},
      {day: "wednesday12", available: false},
      {day: "thursday12", available: false},
      {day: "friday12", available: false},
      {day: "monday12.5", available: false},
       {day: "tuesday12.5", available: false},
       {day: "wednesday12.5", available: false},
       {day: "thursday12.5", available: false},
       {day: "friday12.5", available: false}

    ]

  }
  addSchedule(schedule){
    this.schedule = schedule
  }
  getOwnSchedule(){
    return this.schedule
  }
}
