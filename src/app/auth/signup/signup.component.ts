import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  showSchedule:boolean = false
  hide = true;
  hideCheck = true;
  passwordNotCheck = false;
  signUpForm:FormGroup;

  constructor(

  ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null,[Validators.required]),
      lastName: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
      password: new FormControl(null,[Validators.required]),
      passwordCheck: new FormControl(null, Validators.required)
    })
    this.showSchedule= false;
  }

  onSubmit(){
    //
    if(this.signUpForm.valid && this.signUpForm.value.password == this.signUpForm.value.passwordCheck ){
      const{firstName,lastName,email,password} = this.signUpForm.value;

      this.passwordNotCheck = false;
      this.showSchedule= true;
    }
    if(this.signUpForm.valid && this.signUpForm.value.password != this.signUpForm.value.passwordCheck){
      this.passwordNotCheck = true;
    }
  }

}
