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
  drug_detail_id: ""
  constructor(private _commonHttpService: CommonAPIService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedObj = params;
    });
    // debugger
    if (this.selectedObj.isFrom == 'procedure') {
      document.getElementById("innetworkBtn").style.background = '#3f51b5';
      document.getElementById("innetworkBtn").style.color = '#fff';
      this.getInNetworkData();
    } else if (this.selectedObj.isFrom == 'prescriptionDrug') {
      document.getElementById("innetworkBtn").style.background = '#3f51b5';
      document.getElementById("innetworkBtn").style.color = '#fff';
      this.getDrugOfHospitals();
    } else {
      this.getInNetworkData();
    }
  }

  getHospitalDetails(data, selectedDivId,) {
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
    if (this.showInNetworkData == true) {
      this._router.navigate(['costsharing-private'])
    }
    this.showInNetworkData = true;
    this.showHospitalDetails = false;
    this.showOutOfNetworkData = false;

  }
  getInNetworkData() {
    document.getElementById("innetworkBtn").style.background = '#3f51b5';
    document.getElementById("innetworkBtn").style.color = '#fff';
    document.getElementById("outNetworkBtn").style.background = '#fff';
    this.showInNetworkData = true;
    this.showOutOfNetworkData = false;
    this.showHospitalDetails = false;
    if (this.selectedObj.isFrom == 'procedure') {
      this._commonHttpService.getHospitalsData(this.selectedObj.id).subscribe((response) => {
        if (response.status == "success") {
          this.dataSource = response.data;
        } else {
          this._snackBar.open(response.msg, 'Undo', {
            duration: 2000
          });
        }
      })
    } else if (this.selectedObj.isFrom == 'prescriptionDrug') {
      this.getDrugOfHospitals();
    }
  }
  getOutOfNetworkData() {
    document.getElementById("outNetworkBtn").style.background = '#3f51b5';
    document.getElementById("innetworkBtn").style.background = '#fff';
    document.getElementById("innetworkBtn").style.color = 'black';
    this.showInNetworkData = false;
    this.showOutOfNetworkData = true;
    this.showHospitalDetails = false;
    if (this.selectedObj.isFrom == 'procedure') {
      this._commonHttpService.getOutNetworkData(this.selectedObj.id).subscribe((response) => {
        if (response.status == "success") {
          this.networkOutDataSource = response.data;
        } else {
          this._snackBar.open(response.msg, 'Undo', {
            duration: 2000
          });
        }
      })
    } else if (this.selectedObj.isFrom == 'prescriptionDrug') {
      this.getOutNetworkDrugHospitals();
    }
  }
  getDrugOfHospitals() {
    let obj = { drug_id: this.selectedObj.drug_id, dosage: this.selectedObj.dosage, qty: this.selectedObj.qty }
    this._commonHttpService.drugHospitals(obj).subscribe((res) => {
      if (res.status == 'success') {
        this.dataSource = res.data;
        this.drug_detail_id = res.data[0].drug_detail_id
      }
    })
  }

  getOutNetworkDrugHospitals() {
    // let obj = { drug_id: this.selectedObj.drug_id, dosage: this.selectedObj.dosage, qty: this.selectedObj.qty }
    this._commonHttpService.getOutNetworDrugkData(this.drug_detail_id).subscribe((res) => {
      if (res.status == 'success') {
        this.networkOutDataSource = res.data;
      }
    })
  }
}


