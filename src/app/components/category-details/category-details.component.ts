import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, NavigationExtras } from '@angular/router';
import { CommonAPIService } from '../../services/common-api.service';
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  searchKey;
  subCategoryList;
  
  constructor(private _router: Router,
    private route: ActivatedRoute,
    private _commonHttpService:CommonAPIService) { }

  ngOnInit(): void {
    debugger
    this.searchKey = this.route.snapshot.paramMap.get('categoryKey');
    this.getSubCategoryDetails();
  }

  getSubCategoryDetails(){
    debugger
    this._commonHttpService.getCategoryDetail(this.searchKey).subscribe((res) => {
      if (res.status == 'success') {
          this.subCategoryList = res.data;
      } else {
          this.subCategoryList = [];
          this.subCategoryList = res.msg;
      }
      console.log(res)
  })

  //   this._commonHttpService.getSubCategoryList(categoryId).subscribe((res) => {
  //     if (res.status == "success") {
  //         this.subCategoryList = res.categories;
  //     }
  // })
  }

  getDetailsofCategory(data) {
    
    //this.route.snapshot.data['some_data']
    data.isFrom = "procedure";
    let navigationExtras: NavigationExtras = {
      queryParams: data
  }
    this._router.navigate(['network'],navigationExtras)
  }

}
