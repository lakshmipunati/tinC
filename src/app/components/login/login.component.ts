import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core'
import { FormBuilder, FormGroup, FormControl, NgForm, Validators, FormGroupDirective } from '@angular/forms';
import { CommonAPIService } from '../../services/common-api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedin: boolean = false;

  constructor(private _formBuilder: FormBuilder,
    private _commonHttpService: CommonAPIService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  buildLoginForm() {
    return this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  loginData() {
    this.isLoggedin = true;
    this._commonHttpService.login(this.loginForm.value).subscribe((response) => {
      if (response.loggedIn_status == 1) {
        localStorage.setItem('authToken', response.token);
        this.dialogRef.close(response.user_name);
      } else {
        alert("Login Failed" + response.error)
      }
    })
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
