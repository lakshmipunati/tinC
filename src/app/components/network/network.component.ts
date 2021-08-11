import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  displayedColumns: string[] = ['Hospital', 'Provider', 'NPI', 'Copay', 'Deductable', 'Coinsurance', 'NegotiatedRate'];
  hospitalInfoColumns:string[] = ['billingCode','description', 'provider', 'NPI', 'TIN', 'placeOfService']
  hospitalInfoColumns2:string[] = ['billingCode','description', 'provider', 'NPI', 'TIN'];
  hospitalInfoColumns3:string[] = ['billingCode','description', 'provider', 'NPI'];
  dataSource = ELEMENT_DATA;
  showHospitalDetails: boolean = false;
  hospitalDetailInfo = Network_Data;
  hospitalDetailInfo2 = Network_Data;
  hospitalDetailInfo3 = Network_Data;
  constructor() { }

  ngOnInit(): void {
  }
  getHospitalDetails() {
    this.showHospitalDetails = true;
  }
  backToResult() {
    this.showHospitalDetails = false;
  }
}

export interface PeriodicElement {
  Hospital: string;
  Provider: string;
  NPI: string;
  Copay: string;
  Deductable: string;
  Coinsurance: string;
  NegotiatedRate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Hospital: "Newyork Prebysterian Hospital Columbia & Cornelll", Provider: 'Dr Newton', NPI: "1.0079", Copay: 'H', Deductable: "$1.00", Coinsurance: "NA", NegotiatedRate: "$ 2.90" },
  { Hospital: "NYU Langone Hospitals", Provider: 'Dr Watts', NPI: "1.0079", Copay: 'H', Deductable: "$1.00", Coinsurance: "NA", NegotiatedRate: "$ 2.90" },
  { Hospital: "North shore University Hospitals", Provider: 'Dr Bell', NPI: "1.0079", Copay: 'H', Deductable: "$1.00", Coinsurance: "NA", NegotiatedRate: "$ 2.90" },
  { Hospital: "Long Island  Jewish Medical Centre", Provider: 'Dr Marconi', NPI: "1.0079", Copay: 'H', Deductable: "$1.00", Coinsurance: "NA", NegotiatedRate: "$ 2.90" },
  { Hospital: "Long Island  Jewish Medical Centre", Provider: 'Dr Marconi', NPI: "1.0079", Copay: 'H', Deductable: "$1.00", Coinsurance: "NA", NegotiatedRate: "$ 2.90" },
  { Hospital: "Long Island  Jewish Medical Centre", Provider: 'Dr Marconi', NPI: "1.0079", Copay: 'H', Deductable: "$1.00", Coinsurance: "NA", NegotiatedRate: "$ 2.90" },
  { Hospital: "Long Island  Jewish Medical Centre", Provider: 'Dr Marconi', NPI: "1.0079", Copay: 'H', Deductable: "$1.00", Coinsurance: "NA", NegotiatedRate: "$ 2.90" },
  { Hospital: "Long Island  Jewish Medical Centre", Provider: 'Dr Marconi', NPI: "1.0079", Copay: 'H', Deductable: "$1.00", Coinsurance: "NA", NegotiatedRate: "$ 2.90" }

];

const Network_Data = [
  {billingCode: "2711", description: "Partial Knee Replacement", provider: "Dr.Newton", NPI: "21232", TIN: "7867",placeOfService: "21"}
]
