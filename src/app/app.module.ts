import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


//angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { MyscheduleComponent } from './schedule/myschedule/myschedule.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ScheduleComponent } from './schedule/schedule/schedule.component';

//Routs
import { Routing } from './app.routing';

//services
import { ScheduleService } from './schedule/schedule.service';

@NgModule({
  declarations: [
    AppComponent,
    MyscheduleComponent,
    SigninComponent,
    SignupComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    HttpModule
  ],
  providers: [
    ScheduleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
