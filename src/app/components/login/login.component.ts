import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core'
import { FormBuilder, FormGroup, FormControl, NgForm, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedin:boolean=false;
  constructor(private _formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  buildLoginForm() {
    return this.loginForm = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  loginData(){
    this.isLoggedin = true;
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
