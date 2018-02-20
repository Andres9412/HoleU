import {Routes,RouterModule} from '@angular/router';

import { ScheduleComponent } from './schedule/schedule/schedule.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';



const APP_ROUTER: Routes =[
  {path: '', component: ScheduleComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},

]
export const Routing =RouterModule.forRoot(APP_ROUTER);
