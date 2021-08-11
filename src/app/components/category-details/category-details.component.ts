import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  getDetailsofCategory(){
this._router.navigate(['network'])
  }

}
