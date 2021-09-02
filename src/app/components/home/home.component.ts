import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'home-page',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  constructor(private _router: Router,
    ){

  }
  title = 'tinC';

  navigateToCostSharing(){
    let userName = localStorage.getItem('userName');
    if(userName){
    this._router.navigate(['costsharing-private']);
    }else{
      this._router.navigate(['costsharing-public']);
    }
  }

  

}
