import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CommonAPIService } from '../../services/common-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpHeaders } from '@angular/common/http'
@Component({
    selector: '',
    templateUrl: './csinfo-private.html',
    styleUrls: ['./csinfo-private.css']
})

export class CostSharingPrivateComponent implements OnInit {
    showSelectedTypeInfo: boolean = false;
    subCategoryList: [];
    categoryList: [];
    options: [] = [];
    showProcedure: boolean = true;
    showProcedureDrug: boolean = false;
    searchValue: "";
    searchResult: "";
    drugResult: [];
    drugValue: "";
    quantityList: [];
    dosageList: [];
    quantity: "";
    dosage: "";
    drugId: "";
    drugName: "";
    
    constructor(private _router: Router,
        private _commonHttpService: CommonAPIService,
        private _snackBar: MatSnackBar) { }

    ngOnInit() {
        this.getProcedureData();
    }

    getProcedureData() {
        document.getElementById("procedureBtn").style.background = '#3f51b5';
        document.getElementById("procedureBtn").style.color = '#fff';
        document.getElementById("procedureDrugBtn").style.background = '#fff';
        this.showProcedure = true;
        let headers = new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('authToken') });
        this._commonHttpService.getCategoryDetails(headers).subscribe((res) => {
            if (res.status == "success") {
                this.categoryList = res.categories;
            } else {
                this._snackBar.open(res.msg);
            }
        })
    }
    getSearchedCategory(value) {
        if (value.length >= 3) {
            this._commonHttpService.getSearchResults(value).subscribe((res) => {
                if (res.status == 'success') {
                    this.options = res.data;
                } else {
                    this.options = [];
                    this.searchResult = res.msg;
                    this._snackBar.open(res.msg);
                }
            })
        }
    }
    getProcedureDrugData() {
        this.showProcedure = false;
        document.getElementById("procedureBtn").style.background = '#fff';
        document.getElementById("procedureDrugBtn").style.background = '#3f51b5';
        document.getElementById("procedureBtn").style.color = 'black';
    }

    getSelectedTypeInfo(categoryId) {
        this.showSelectedTypeInfo = true;
        this._commonHttpService.getSubCategoryList(categoryId).subscribe((res) => {
            if (res.status == "success") {
                this.subCategoryList = res.categories;
            } else {
                this._snackBar.open(res.msg);
            }
        })
    }

    getCategoryDetails(value) {
        this._router.navigate(['category-details', value])
    }

    searchDrug(value) {
        if (value.length >= 3) {
            this._commonHttpService.searchDrugData(value).subscribe((res) => {
                if (res.status == 'success') {
                    this.drugResult = res.data;
                } else {
                    this.options = [];
                    this.searchResult = res.msg;
                }
            })
        }
    }

    // getCategoryDetail(){

    // }

    getDosageData(drugId, drugName) {
        this.drugId = drugId;
        this.drugName = drugName;
        this._commonHttpService.getDosage(drugId).subscribe((res) => {
            if (res.status == 'success') {
                this.dosageList = res.data;
            } else {
                this.options = [];
                this.searchResult = res.msg;
            }
        })
    }
    getQuantityData(dosage) {
        this._commonHttpService.getQuantity(this.drugId, dosage).subscribe((res) => {
            if (res.status == 'success') {
                this.quantityList = res.data;
            } else {
                this.options = [];
                this.searchResult = res.msg;
            }
        })
    }
    onDataSelected(data) {
        data.isFrom = "procedure";
        let navigationExtras: NavigationExtras = {
            queryParams: data
        }
        this._router.navigate(['network'], navigationExtras)
    }

    getDrugHospitals() {
        let data = { isFrom: "prescriptionDrug", drug_id: this.drugId, dosage: this.dosage, qty: this.quantity, drugName: this.drugName, drug_detail_id: "" };
        let navigationExtras: NavigationExtras = {
            queryParams: data
        }
        this._router.navigate(['network'], navigationExtras);
    }
}

