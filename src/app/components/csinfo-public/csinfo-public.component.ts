import { Component, OnInit } from '@angular/core';

@Component({
    selector: '',
    templateUrl: './csinfo-public.html',
    styleUrls: ['./csinfo-public.css']
})

export class CostSharingPublicComponent implements OnInit {
    value = "Window test"
    constructor() {

    }
    ngOnInit() {

    }
    openDoc() {
        let myWindow = window.open("", "MsgWindow");
        myWindow.document.write(`<pre>{
            "reporting_entity_name": "Abc Inc",
            "reporting_entity_type": "ABC",
            "plan": [
                {
                    "plan_name": "healthy life",
                    "plan_id_type": "HIOS",
                    "plan_id": "1234567543281",
                    "plan_market_type": "individual",
                    "last_updated_on": "2021-07-27",
                    "drugs": [
                        {
                            "drug_name": "amaryl",
                            "drug_type": "brand",
                            "ndc": "0039-0221-10",
                            "prices": [
                                {
                                    "historical_net_price": "3",
                                    "historical_net_reporting_period": "2021-06-28",
                                    "negotiated_rate": "2",
                                    "administrative_fee": "1",
                                    "dispensing_fee": "3",
                                    "transaction_fee": "0.05",
                                    "tin": "11-111111",
                                    "service_code": "1",
                                    "npi": "11111111",
                                    "pharmacies": [
                                        {
                                            "pharmacy_id_type": "ncpdp chain code",
                                            "pharmacy_ids": "333333,222222,111111"
                                        },
                                        {
                                            "pharmacy_id_type": "ncpdp id",
                                            "pharmacy_ids": "4444444,22222222,1111111,333333"
                                        },
                                        {
                                            "pharmacy_id_type": "npi",
                                            "pharmacy_ids": "11111"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "drug_name": "Simvastatin",
                            "drug_type": "generic",
                            "ndc": "16729-004",
                            "prices": [
                                {
                                    "historical_net_price": "0.01",
                                    "historical_net_reporting_period": "2021-05-28",
                                    "negotiated_rate": "0",
                                    "administrative_fee": "0.02",
                                    "dispensing_fee": "2",
                                    "transaction_fee": "0.05",
                                    "tin": "11-111111",
                                    "service_code": "1",
                                    "npi": "22222222",
                                    "pharmacies": [
                                        {
                                            "pharmacy_id_type": "ncpdp chain code",
                                            "pharmacy_ids": "222222,111111,333333"
                                        },
                                        {
                                            "pharmacy_id_type": "ncpdp id",
                                            "pharmacy_ids": "1111111,4444444,333333,22222222"
                                        },
                                        {
                                            "pharmacy_id_type": "npi",
                                            "pharmacy_ids": "22222,11111"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "drug_name": "ativan",
                            "drug_type": "brand",
                            "ndc": "500090-0192",
                            "prices": [
                                {
                                    "historical_net_price": "4",
                                    "historical_net_reporting_period": "2021-07-28",
                                    "negotiated_rate": "2",
                                    "administrative_fee": "1",
                                    "dispensing_fee": "3",
                                    "transaction_fee": "0.05",
                                    "tin": "11-111111",
                                    "service_code": "1",
                                    "npi": "333333333",
                                    "pharmacies": [
                                        {
                                            "pharmacy_id_type": "ncpdp chain code",
                                            "pharmacy_ids": "111111"
                                        },
                                        {
                                            "pharmacy_id_type": "ncpdp id",
                                            "pharmacy_ids": "4444444,333333,22222222,1111111"
                                        },
                                        {
                                            "pharmacy_id_type": "npi",
                                            "pharmacy_ids": "22222"
                                        }
                                    ]
                                },
                                {
                                    "historical_net_price": "4",
                                    "historical_net_reporting_period": "2021-07-28",
                                    "negotiated_rate": "2",
                                    "administrative_fee": "2",
                                    "dispensing_fee": "3",
                                    "transaction_fee": "0.05",
                                    "tin": "11-111111",
                                    "service_code": "1",
                                    "npi": "333333333",
                                    "pharmacies": [
                                        {
                                            "pharmacy_id_type": "ncpdp chain code",
                                            "pharmacy_ids": "222222"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }</pre>`);
    }

    openIINDoc() {
        let myWindow = window.open("", "MsgWindow");
        myWindow.document.write(`<pre>[
            {
                "reporting_entity_name": "Abc Inc",
                "reporting_entity_type": "ABC",
                "plan": [
                    {
                        "plan_name": "family life",
                        "plan_id_type": "HIOS",
                        "plan_id": "1234567543276",
                        "plan_market_type": "group",
                        "last_updated_on": "2021-07-26",
                        "in_network": [
                            {
                                "negotiation_arrangement": "bundle",
                                "name": "MASSAGE THERAPY",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "97124",
                                "description": "Use of massage.",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "76",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "48",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1568980621",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "45",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1316311202",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "49",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "54",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1922083948",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "55",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962435719",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "56",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962446831,1316336076",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "65",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1003108325",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "73",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143790",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "76",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143716",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "77",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143761",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "78",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ],
                                "bundled_codes": [
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "99173",
                                        "description": "Eye test."
                                    },
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "99244",
                                        "description": "Patient office consultation, typically 60 min."
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "plan_name": "healthy life",
                        "plan_id_type": "HIOS",
                        "plan_id": "1234567543281",
                        "plan_market_type": "group",
                        "last_updated_on": "2021-07-26",
                        "in_network": [
                            {
                                "negotiation_arrangement": "bundle",
                                "name": "LIPID PANEL",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "80061",
                                "description": "Blood test, lipids (cholesterol and triglycerides).",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962435719",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "117",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1922083948",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "118",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "120",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962446831",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "123",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1003108325,1568980621,1316311202,1316336076,1902143761,1902143716,1902143790",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ],
                                "bundled_codes": [
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "99173",
                                        "description": "Eye test."
                                    },
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "99244",
                                        "description": "Patient office consultation, typically 60 min."
                                    }
                                ]
                            },
                            {
                                "negotiation_arrangement": "bundle",
                                "name": "GLUCOSE TOLERANCE TEST",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "82951",
                                "description": "Test to predict likelihood of gestational diabetes.",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962435719",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "117",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1922083948",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "118",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "120",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962446831",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "123",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1003108325,1568980621,1316311202,1316336076,1902143761,1902143716,1902143790",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ],
                                "bundled_codes": [
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "99173",
                                        "description": "Eye test."
                                    },
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "99244",
                                        "description": "Patient office consultation, typically 60 min."
                                    }
                                ]
                            },
                            {
                                "negotiation_arrangement": "bundle",
                                "name": "Total Knee Replacement",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "470",
                                "description": "Major joint replacement or reattachment of lower extremity.",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "20134",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "16754",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1922083948,1316311202",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "17865",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1316336076",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "18769",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962435719",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "18970",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962446831,1568980621,1902143761",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "19876",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "20000",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143716",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "20111",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143790",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "20121",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1003108325",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "20132",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ],
                                "bundled_codes": [
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "97010",
                                        "description": "Use of external hot or cold packs."
                                    },
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "97113",
                                        "description": "Use of water for therapy/exercises."
                                    }
                                ]
                            },
                            {
                                "negotiation_arrangement": "bundle",
                                "name": "CHEST XRAY",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "71045",
                                "description": "Single view.",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "243",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "251",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143716",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "233",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143790",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "244",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502,1922083948,1962435719,1962446831,1003108325,1568980621,1316311202,1316336076",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "251",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143761",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "254",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ],
                                "bundled_codes": [
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "99173",
                                        "description": "Eye test."
                                    },
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "99244",
                                        "description": "Patient office consultation, typically 60 min."
                                    }
                                ]
                            },
                            {
                                "negotiation_arrangement": "bundle",
                                "name": "CHEST XRAY",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "71046",
                                "description": "2 views, front and back.",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "265",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "265",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502,1922083948,1962435719,1962446831,1003108325,1568980621,1316311202,1316336076,1902143761,1902143716,1902143790",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "265",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ],
                                "bundled_codes": [
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "99173",
                                        "description": "Eye test."
                                    },
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "99244",
                                        "description": "Patient office consultation, typically 60 min."
                                    }
                                ]
                            },
                            {
                                "negotiation_arrangement": "bundle",
                                "name": "MASSAGE THERAPY",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "97124",
                                "description": "Use of massage.",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "76",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "48",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1568980621",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "45",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1316311202",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "49",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "54",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1922083948",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "55",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962435719",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "56",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962446831,1316336076",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "65",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1003108325",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "73",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143790",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "76",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143716",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "77",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143761",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "78",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ],
                                "bundled_codes": [
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "99173",
                                        "description": "Eye test."
                                    },
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "99244",
                                        "description": "Patient office consultation, typically 60 min."
                                    }
                                ]
                            },
                            {
                                "negotiation_arrangement": "bundle",
                                "name": "POLYSOM 6/> YRS 4/> PARAM",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "95810",
                                "description": "Sleep monitoring of patient (6 years or older) in sleep lab.",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962435719",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "117",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1922083948",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "118",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "120",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962446831",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "123",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1003108325,1568980621,1316311202,1316336076,1902143761,1902143716,1902143790",
                                        "tin": "123456789",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ],
                                "bundled_codes": [
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "99173",
                                        "description": "Eye test."
                                    },
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "99244",
                                        "description": "Patient office consultation, typically 60 min."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "reporting_entity_name": "Abc Inc",
                "reporting_entity_type": "ABC",
                "plan": [
                    {
                        "plan_name": "family life",
                        "plan_id_type": "HIOS",
                        "plan_id": "1234567543276",
                        "plan_market_type": "group",
                        "last_updated_on": "2021-07-26",
                        "in_network": [
                            {
                                "negotiation_arrangement": "capitations",
                                "name": "MASSAGE THERAPY",
                                "description": "Use of massage.",
                                "negotiated_rates": [
                                    {
                                        "negotiated_rate": "80000",
                                        "providers": [
                                            {
                                                "tin": "123456767",
                                                "service_code": "22",
                                                "npi": "1902143787"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "22",
                                                "npi": "1811908502,1922083948,1962435719,1962446831,1902143761,1902143716,1902143790"
                                            }
                                        ]
                                    },
                                    {
                                        "negotiated_rate": "90000",
                                        "providers": [
                                            {
                                                "tin": "123456787",
                                                "service_code": "22",
                                                "npi": "1578500443"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "22",
                                                "npi": "1003108325,1568980621,1316311202,1316336076"
                                            }
                                        ]
                                    }
                                ],
                                "covered_services": []
                            }
                        ]
                    },
                    {
                        "plan_name": "healthy life",
                        "plan_id_type": "HIOS",
                        "plan_id": "1234567543281",
                        "plan_market_type": "group",
                        "last_updated_on": "2021-07-26",
                        "in_network": [
                            {
                                "negotiation_arrangement": "capitations",
                                "name": "LIPID PANEL",
                                "description": "Blood test, lipids (cholesterol and triglycerides).",
                                "negotiated_rates": [
                                    {
                                        "negotiated_rate": "80000",
                                        "providers": [
                                            {
                                                "tin": "123456767",
                                                "service_code": "1",
                                                "npi": "1902143787"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "1",
                                                "npi": "1902143761,1902143716,1902143790,1811908502,1922083948,1962435719,1962446831"
                                            }
                                        ]
                                    },
                                    {
                                        "negotiated_rate": "90000",
                                        "providers": [
                                            {
                                                "tin": "123456787",
                                                "service_code": "1",
                                                "npi": "1578500443"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "1",
                                                "npi": "1316336076,1003108325,1568980621,1316311202"
                                            }
                                        ]
                                    }
                                ],
                                "covered_services": [
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "97010",
                                        "description": "Use of external hot or cold packs."
                                    }
                                ]
                            },
                            {
                                "negotiation_arrangement": "capitations",
                                "name": "GLUCOSE TOLERANCE TEST",
                                "description": "Test to predict likelihood of gestational diabetes.",
                                "negotiated_rates": [
                                    {
                                        "negotiated_rate": "80000",
                                        "providers": [
                                            {
                                                "tin": "123456767",
                                                "service_code": "1",
                                                "npi": "1902143787"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "1",
                                                "npi": "1811908502,1922083948,1962435719,1962446831,1902143761,1902143716,1902143790"
                                            }
                                        ]
                                    },
                                    {
                                        "negotiated_rate": "90000",
                                        "providers": [
                                            {
                                                "tin": "123456787",
                                                "service_code": "1",
                                                "npi": "1578500443"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "1",
                                                "npi": "1003108325,1568980621,1316311202,1316336076"
                                            }
                                        ]
                                    }
                                ],
                                "covered_services": []
                            },
                            {
                                "negotiation_arrangement": "capitations",
                                "name": "Total Knee Replacement",
                                "description": "Major joint replacement or reattachment of lower extremity.",
                                "negotiated_rates": [
                                    {
                                        "negotiated_rate": "80000",
                                        "providers": [
                                            {
                                                "tin": "123456767",
                                                "service_code": "22",
                                                "npi": "1902143787"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "22",
                                                "npi": "1811908502,1922083948,1962435719,1962446831,1902143761,1902143716,1902143790"
                                            }
                                        ]
                                    },
                                    {
                                        "negotiated_rate": "90000",
                                        "providers": [
                                            {
                                                "tin": "123456787",
                                                "service_code": "22",
                                                "npi": "1578500443"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "22",
                                                "npi": "1003108325,1568980621,1316311202,1316336076"
                                            }
                                        ]
                                    }
                                ],
                                "covered_services": [
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "97113",
                                        "description": "Use of water for therapy/exercises."
                                    },
                                    {
                                        "billing_code_type": "CPT",
                                        "billing_code_type_version": "2021",
                                        "billing_code": "97010",
                                        "description": "Use of external hot or cold packs."
                                    }
                                ]
                            },
                            {
                                "negotiation_arrangement": "capitations",
                                "name": "CHEST XRAY",
                                "description": "Single view.",
                                "negotiated_rates": [
                                    {
                                        "negotiated_rate": "80000",
                                        "providers": [
                                            {
                                                "tin": "123456767",
                                                "service_code": "22",
                                                "npi": "1902143787"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "22",
                                                "npi": "1811908502,1922083948,1962435719,1962446831,1902143761,1902143716,1902143790"
                                            }
                                        ]
                                    },
                                    {
                                        "negotiated_rate": "90000",
                                        "providers": [
                                            {
                                                "tin": "123456787",
                                                "service_code": "22",
                                                "npi": "1578500443"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "22",
                                                "npi": "1003108325,1568980621,1316311202,1316336076"
                                            }
                                        ]
                                    }
                                ],
                                "covered_services": []
                            },
                            {
                                "negotiation_arrangement": "capitations",
                                "name": "CHEST XRAY",
                                "description": "2 views, front and back.",
                                "negotiated_rates": [
                                    {
                                        "negotiated_rate": "80000",
                                        "providers": [
                                            {
                                                "tin": "123456767",
                                                "service_code": "22",
                                                "npi": "1902143787"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "22",
                                                "npi": "1811908502,1922083948,1962435719,1962446831,1902143761,1902143716,1902143790"
                                            }
                                        ]
                                    },
                                    {
                                        "negotiated_rate": "90000",
                                        "providers": [
                                            {
                                                "tin": "123456787",
                                                "service_code": "22",
                                                "npi": "1578500443"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "22",
                                                "npi": "1003108325,1568980621,1316311202,1316336076"
                                            }
                                        ]
                                    }
                                ],
                                "covered_services": []
                            },
                            {
                                "negotiation_arrangement": "capitations",
                                "name": "MASSAGE THERAPY",
                                "description": "Use of massage.",
                                "negotiated_rates": [
                                    {
                                        "negotiated_rate": "80000",
                                        "providers": [
                                            {
                                                "tin": "123456767",
                                                "service_code": "22",
                                                "npi": "1902143787"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "22",
                                                "npi": "1811908502,1922083948,1962435719,1962446831,1902143761,1902143716,1902143790"
                                            }
                                        ]
                                    },
                                    {
                                        "negotiated_rate": "90000",
                                        "providers": [
                                            {
                                                "tin": "123456787",
                                                "service_code": "22",
                                                "npi": "1578500443"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "22",
                                                "npi": "1003108325,1568980621,1316311202,1316336076"
                                            }
                                        ]
                                    }
                                ],
                                "covered_services": []
                            },
                            {
                                "negotiation_arrangement": "capitations",
                                "name": "POLYSOM 6/> YRS 4/> PARAM",
                                "description": "Sleep monitoring of patient (6 years or older) in sleep lab.",
                                "negotiated_rates": [
                                    {
                                        "negotiated_rate": "80000",
                                        "providers": [
                                            {
                                                "tin": "123456767",
                                                "service_code": "52",
                                                "npi": "1902143787"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "52",
                                                "npi": "1811908502,1922083948,1962435719,1962446831,1902143761,1902143716,1902143790"
                                            }
                                        ]
                                    },
                                    {
                                        "negotiated_rate": "90000",
                                        "providers": [
                                            {
                                                "tin": "123456787",
                                                "service_code": "52",
                                                "npi": "1578500443"
                                            },
                                            {
                                                "tin": "123456789",
                                                "service_code": "52",
                                                "npi": "1003108325,1568980621,1316311202,1316336076"
                                            }
                                        ]
                                    }
                                ],
                                "covered_services": []
                            }
                        ]
                    }
                ]
            },
            {
                "reporting_entity_name": "Abc Inc",
                "reporting_entity_type": "ABC",
                "plan": [
                    {
                        "plan_name": "family life",
                        "plan_id_type": "HIOS",
                        "plan_id": "1234567543276",
                        "plan_market_type": "group",
                        "last_updated_on": "2021-07-26",
                        "in_network": [
                            {
                                "negotiation_arrangement": "ffs",
                                "name": "MASSAGE THERAPY",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "97124",
                                "description": "Use of massage.",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "76",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "48",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1568980621",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "45",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1316311202",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "49",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "54",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1922083948",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "55",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962435719",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "56",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962446831,1316336076",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "65",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1003108325",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "73",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143790",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "76",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143716",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "77",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143761",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "78",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "plan_name": "healthy life",
                        "plan_id_type": "HIOS",
                        "plan_id": "1234567543281",
                        "plan_market_type": "group",
                        "last_updated_on": "2021-07-26",
                        "in_network": [
                            {
                                "negotiation_arrangement": "ffs",
                                "name": "LIPID PANEL",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "80061",
                                "description": "Blood test, lipids (cholesterol and triglycerides).",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "service_code": "1",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "service_code": "1",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962435719",
                                        "tin": "123456789",
                                        "service_code": "1",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "117",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1922083948",
                                        "tin": "123456789",
                                        "service_code": "1",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "118",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502",
                                        "tin": "123456789",
                                        "service_code": "1",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "120",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962446831",
                                        "tin": "123456789",
                                        "service_code": "1",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "123",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1003108325,1568980621,1316311202,1316336076,1902143761,1902143716,1902143790",
                                        "tin": "123456789",
                                        "service_code": "1",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ]
                            },
                            {
                                "negotiation_arrangement": "ffs",
                                "name": "GLUCOSE TOLERANCE TEST",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "82951",
                                "description": "Test to predict likelihood of gestational diabetes.",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "service_code": "1",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "service_code": "1",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962435719",
                                        "tin": "123456789",
                                        "service_code": "1",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "117",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1922083948",
                                        "tin": "123456789",
                                        "service_code": "1",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "118",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502",
                                        "tin": "123456789",
                                        "service_code": "1",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "120",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962446831",
                                        "tin": "123456789",
                                        "service_code": "1",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "123",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1003108325,1568980621,1316311202,1316336076,1902143761,1902143716,1902143790",
                                        "tin": "123456789",
                                        "service_code": "1",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ]
                            },
                            {
                                "negotiation_arrangement": "ffs",
                                "name": "Total Knee Replacement",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "470",
                                "description": "Major joint replacement or reattachment of lower extremity.",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "20134",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "16754",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1922083948,1316311202",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "17865",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1316336076",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "18769",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962435719",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "18970",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962446831,1568980621,1902143761",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "19876",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "20000",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143716",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "20111",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143790",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "20121",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1003108325",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "20132",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ]
                            },
                            {
                                "negotiation_arrangement": "ffs",
                                "name": "CHEST XRAY",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "71045",
                                "description": "Single view.",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "243",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "251",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143716",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "233",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143790",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "244",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502,1922083948,1962435719,1962446831,1003108325,1568980621,1316311202,1316336076",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "251",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143761",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "254",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ]
                            },
                            {
                                "negotiation_arrangement": "ffs",
                                "name": "CHEST XRAY",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "71046",
                                "description": "2 views, front and back.",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "265",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "265",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502,1922083948,1962435719,1962446831,1003108325,1568980621,1316311202,1316336076,1902143761,1902143716,1902143790",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "265",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ]
                            },
                            {
                                "negotiation_arrangement": "ffs",
                                "name": "MASSAGE THERAPY",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "97124",
                                "description": "Use of massage.",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "76",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "48",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1568980621",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "45",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1316311202",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "49",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "54",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1922083948",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "55",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962435719",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "56",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962446831,1316336076",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "65",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1003108325",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "73",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143790",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "76",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143716",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "77",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1902143761",
                                        "tin": "123456789",
                                        "service_code": "22",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "78",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ]
                            },
                            {
                                "negotiation_arrangement": "ffs",
                                "name": "POLYSOM 6/> YRS 4/> PARAM",
                                "billing_code_type": "CPT",
                                "billing_code_type_version": "2021",
                                "billing_code": "95810",
                                "description": "Sleep monitoring of patient (6 years or older) in sleep lab.",
                                "negotiated_rates": [
                                    {
                                        "providers": "1902143787",
                                        "tin": "123456767",
                                        "service_code": "52",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1578500443",
                                        "tin": "123456787",
                                        "service_code": "52",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962435719",
                                        "tin": "123456789",
                                        "service_code": "52",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "117",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1922083948",
                                        "tin": "123456789",
                                        "service_code": "52",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "118",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1811908502",
                                        "tin": "123456789",
                                        "service_code": "52",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "120",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1962446831",
                                        "tin": "123456789",
                                        "service_code": "52",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "123",
                                            "expiration_date": "2021-12-31"
                                        }
                                    },
                                    {
                                        "providers": "1003108325,1568980621,1316311202,1316336076,1902143761,1902143716,1902143790",
                                        "tin": "123456789",
                                        "service_code": "52",
                                        "negotiated_price": {
                                            "negotiated_type": "negotiated",
                                            "negotiated_rate": "176",
                                            "expiration_date": "2021-12-31"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]</pre>`)
    }
    
    openOONDoc() {
        let myWindow = window.open("", "MsgWindow");
        myWindow.document.write(`<pre>{
            "reporting_entity_name": "medicare",
            "reporting_entity_type": "medicare",
            "plan_name": "tinC poc",
            "plan_id": "12345XX9876543",
            "plan_id_type": "HIOS",
            "plan_market_type": "Individual",
            "last_updated_on": "2021-07-28",
            "out_of_network": [
                {
                    "name": "90834",
                    "billing_code_type": "CPT",
                    "billing_code_type_version": "2021",
                    "billing_code": "90834",
                    "description": "Psychotherapy,  45 min with patient and/or family member",
                    "allowed_amounts": {
                        "tin": "987654321",
                        "service_Code": "11",
                        "payments": {
                            "allowed_amount": "50.00",
                            "providers": [
                                {
                                    "billed_amount": "60.00",
                                    "npi": "1234567707"
                                }
                            ]
                        }
                    }
                },
                {
                    "name": "90837",
                    "billing_code_type": "CPT",
                    "billing_code_type_version": "2021",
                    "billing_code": "90837",
                    "description": "Psychotherapy, 60 minutes with patient and/or family member",
                    "allowed_amounts": {
                        "tin": "987654321",
                        "service_Code": "11",
                        "payments": {
                            "allowed_amount": "55.00",
                            "providers": [
                                {
                                    "billed_amount": "30.00",
                                    "npi": "1234567912,1234567915"
                                }
                            ]
                        }
                    }
                },
                {
                    "name": "90839",
                    "billing_code_type": "CPT",
                    "billing_code_type_version": "2021",
                    "billing_code": "90839",
                    "description": "Psychotherapy for crisis, first 60 min",
                    "allowed_amounts": {
                        "tin": "987654321",
                        "service_Code": "11",
                        "payments": {
                            "allowed_amount": "40.00",
                            "providers": [
                                {
                                    "billed_amount": "45.00",
                                    "npi": "1234567700,1234567808"
                                },
                                {
                                    "billed_amount": "55.00",
                                    "npi": "1234567805"
                                }
                            ]
                        }
                    }
                },
                {
                    "name": "90839",
                    "billing_code_type": "CPT",
                    "billing_code_type_version": "2021",
                    "billing_code": "90839",
                    "description": "Psychotherapy for crisis, first 60 min",
                    "allowed_amounts": {
                        "tin": "987654321",
                        "service_Code": "11",
                        "payments": {
                            "allowed_amount": "65.00",
                            "providers": [
                                {
                                    "billed_amount": "65.00",
                                    "npi": "1234567965"
                                }
                            ]
                        }
                    }
                },
                {
                    "name": "90839",
                    "billing_code_type": "CPT",
                    "billing_code_type_version": "2021",
                    "billing_code": "90839",
                    "description": "Psychotherapy for crisis, first 60 min",
                    "allowed_amounts": {
                        "tin": "987654321",
                        "service_Code": "11",
                        "payments": {
                            "allowed_amount": "85.00",
                            "providers": [
                                {
                                    "billed_amount": "55.00",
                                    "npi": "1234567819"
                                }
                            ]
                        }
                    }
                },
                {
                    "name": "90847",
                    "billing_code_type": "CPT",
                    "billing_code_type_version": "2021",
                    "billing_code": "90847",
                    "description": "Family psychotherapy, conjoint with patient present",
                    "allowed_amounts": {
                        "tin": "987654321",
                        "service_Code": "11",
                        "payments": {
                            "allowed_amount": "20.00",
                            "providers": [
                                {
                                    "billed_amount": "10.00",
                                    "npi": "1234567885"
                                }
                            ]
                        }
                    }
                },
                {
                    "name": "90847",
                    "billing_code_type": "CPT",
                    "billing_code_type_version": "2021",
                    "billing_code": "90847",
                    "description": "Family psychotherapy, conjoint with patient present",
                    "allowed_amounts": {
                        "tin": "987654321",
                        "service_Code": "11",
                        "payments": {
                            "allowed_amount": "55.00",
                            "providers": [
                                {
                                    "billed_amount": "30.00",
                                    "npi": "1234567915"
                                }
                            ]
                        }
                    }
                },
                {
                    "name": "90847",
                    "billing_code_type": "CPT",
                    "billing_code_type_version": "2021",
                    "billing_code": "90847",
                    "description": "Family psychotherapy, conjoint with patient present",
                    "allowed_amounts": {
                        "tin": "987654321",
                        "service_Code": "11",
                        "payments": {
                            "allowed_amount": "90.00",
                            "providers": [
                                {
                                    "billed_amount": "95.00",
                                    "npi": "1234567920"
                                }
                            ]
                        }
                    }
                },
                {
                    "name": "90853",
                    "billing_code_type": "CPT",
                    "billing_code_type_version": "2021",
                    "billing_code": "90853",
                    "description": "Group Psychotherapy",
                    "allowed_amounts": {
                        "tin": "987654321",
                        "service_Code": "11",
                        "payments": {
                            "allowed_amount": "75.00",
                            "providers": [
                                {
                                    "billed_amount": "200.00",
                                    "npi": "1234567911"
                                }
                            ]
                        }
                    }
                },
                {
                    "name": "90853",
                    "billing_code_type": "CPT",
                    "billing_code_type_version": "2021",
                    "billing_code": "90853",
                    "description": "Group Psychotherapy",
                    "allowed_amounts": {
                        "tin": "987654321",
                        "service_Code": "11",
                        "payments": {
                            "allowed_amount": "80.00",
                            "providers": [
                                {
                                    "billed_amount": "60.00",
                                    "npi": "1234567886"
                                }
                            ]
                        }
                    }
                }
            ]
        }</pre>`);
    }
}