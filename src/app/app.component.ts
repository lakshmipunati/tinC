import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginUsername;
  isLoggedIn: boolean = false;

  constructor(private _router: Router,
    private _dialog: MatDialog) {
      localStorage.getItem("userName")
    if (localStorage.getItem("userName") == "" || localStorage.getItem("userName") == null) {
      localStorage.setItem('userName', "");
    } else {
      this.loginUsername = localStorage.getItem("userName");
      this.isLoggedIn = true;
    }

  }
  title = 'tinC';

  openDialog(): void {
    const dialogRef = this._dialog.open(LoginComponent, {
      width: '400px',
      height: '350px'

    });
    dialogRef.afterClosed().subscribe(result => {
      this.isLoggedIn = true;
      this.loginUsername = result;
      localStorage.setItem('userName', this.loginUsername);
      this._router.navigate(['home']);
    });
  }

  logoutUser(){
    debugger
    this.isLoggedIn = false;
    localStorage.removeItem("userName");
    localStorage.removeItem("authToken");
    this._router.navigate(['/'])
  }
}
