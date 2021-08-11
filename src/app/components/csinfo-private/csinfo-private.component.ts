import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: '',
    templateUrl: './csinfo-private.html',
    styleUrls: ['./csinfo-private.css']
})

export class CostSharingPrivateComponent implements OnInit {
    showSelectedTypeInfo: boolean = false;
    categoryList = categoryList;
    constructor(private _router: Router) {

    }
    ngOnInit() {

    }

    getSelectedTypeInfo() {
        this.showSelectedTypeInfo = !this.showSelectedTypeInfo;
    }

    getCategoryDetails(){
        this._router.navigate(['category-details'])
    }
}

const categoryList = [{
    key: "ACL Reconstruction surgery"
},
{
    key: "Ankle Replacement surgery"
},
{
    key: "Knee Replacement surgery"
},
{
    key: "Anthroscopy"
}]