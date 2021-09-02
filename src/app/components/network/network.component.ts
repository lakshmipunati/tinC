import { Component, OnInit } from '@angular/core';
import { CommonAPIService } from '../../services/common-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  displayedColumns: string[] = ['name', 'provider_name', 'npi', 'copay', 'deductible', 'coinsurance', 'negotiationamount'];
  dataSource: [];
  showHospitalDetails: boolean = false;
  showOutOfNetworkData: boolean = false;
  showInNetworkData: boolean = true;
  hospitalDetailInfo;
  networkOutDataSource;
  selectedObj;
  prevCls: string = "";
  
  constructor(private _commonHttpService: CommonAPIService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedObj = params;
    });
    if (this.selectedObj.isFrom == 'procedure') {
      this.getInNetworkData();
    } else if (this.selectedObj.isFrom == 'prescriptionDrug') {
      this.getDrugOfHospitals();
    } else {
      this.getInNetworkData();
    }

  }

  getHospitalDetails(data, selectedDivId,) {
    if (this.prevCls != selectedDivId) {
      if (this.prevCls) {
        let prevVal = "#" + this.prevCls;
        $(prevVal).removeClass("highlight");
      }
      let newCls = "#" + selectedDivId;
      $(newCls).addClass('highlight');
      this.prevCls = selectedDivId;
    };
    this.showInNetworkData = false;
    this.showOutOfNetworkData = false;
    this.showHospitalDetails = true;
    if (this.selectedObj.isFrom == 'procedure') {
      let request = { detail_id: this.selectedObj.id, hospital_id: data.id }
      this._commonHttpService.getHospitalsDetailsData(request).subscribe((response) => {
        if (response.status == "success") {
          this.hospitalDetailInfo = response.data;
          this.hospitalDetailInfo.rx_qty = "--";
          this.hospitalDetailInfo.rx_dosage = "--";
        } else {
          this._snackBar.open(response.msg, 'Undo', {
            duration: 2000
          });
          //alert(response.msg);
        }
      })
    } else if (this.selectedObj.isFrom == 'prescriptionDrug') {
      let request = { drug_detail_id: data.drug_detail_id, hospital_id: data.hospital_id }
      this._commonHttpService.getDrugDetailsData(request).subscribe((response) => {
        if (response.status == "success") {
          this.hospitalDetailInfo = response.data;
        } else {
          this._snackBar.open(response.msg, 'Undo', {
            duration: 2000
          });
        }
      })
    }
  }
  backToResult() {
    //debugger
    if (this.showInNetworkData == true) {
      this._router.navigate(['costsharing-private'])
    }
    this.showInNetworkData = true;
    this.showHospitalDetails = false;
    this.showOutOfNetworkData = false;

  }
  getInNetworkData() {
    document.getElementById("innetworkBtn").style.background='#3f51b5';
    document.getElementById("innetworkBtn").style.color='#fff';
    document.getElementById("outNetworkBtn").style.background='#fff';
    
    this.showInNetworkData = true;
    this.showOutOfNetworkData = false;
    this.showHospitalDetails = false;
    this._commonHttpService.getHospitalsData(this.selectedObj.id).subscribe((response) => {
      if (response.status == "success") {
        this.dataSource = response.data;
      } else {
        this._snackBar.open(response.msg, 'Undo', {
          duration: 2000
        });
      }
    })
  }
  getOutOfNetworkData() {
    document.getElementById("outNetworkBtn").style.background='#3f51b5';
    document.getElementById("innetworkBtn").style.background='#fff';
    document.getElementById("innetworkBtn").style.color='black';
    this.showInNetworkData = false;
    this.showOutOfNetworkData = true;
    this.showHospitalDetails = false;
    this._commonHttpService.getOutNetworkData(this.selectedObj.id).subscribe((response) => {
      if (response.status == "success") {
        this.networkOutDataSource = response.data;
      } else {
        this._snackBar.open(response.msg, 'Undo', {
          duration: 2000
        });
      }
    })
  }
  getDrugOfHospitals() {
    let obj = { drug_id: this.selectedObj.drug_id, dosage: this.selectedObj.dosage, qty: this.selectedObj.qty }
    this._commonHttpService.drugHospitals(obj).subscribe((res) => {
      if (res.status == 'success') {
        this.dataSource = res.data;
      }
    })
  }
}


