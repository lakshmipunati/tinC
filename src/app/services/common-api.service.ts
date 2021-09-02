import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })


export class CommonAPIService {
    readonly baseURL = 'http://192.168.7.20:8000/api';
    readonly headers = new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('authToken') });

    constructor(private _httpClient: HttpClient) {

    }
    login(request): Observable<any> {
        return this._httpClient.post(this.baseURL + "/login", request);
    }

    getCategoryDetails(): Observable<any> {
        return this._httpClient.get(this.baseURL + "/category", { headers: this.headers })
    }

    getSubCategoryList(categoryId): Observable<any> {
        return this._httpClient.get(this.baseURL + "/subCategory/" + categoryId, { headers: this.headers })
    }

    getSearchResults(searchValue): Observable<any> {
        let obj = { search_val: searchValue }
        return this._httpClient.post(this.baseURL + "/search", obj, { headers: this.headers })
    }

    getHospitalsData(id): Observable<any> {
        let obj = { detail_id: id }
        return this._httpClient.post(this.baseURL + "/hospital", obj, { headers: this.headers })
    }

    getHospitalsDetailsData(request): Observable<any> {
        return this._httpClient.post(this.baseURL + "/hospital_detail", request, { headers: this.headers })
    }

    getOutNetworkData(id): Observable<any> {
        return this._httpClient.get(this.baseURL + "/outNetwork/" + id, { headers: this.headers })
    }

    searchDrugData(searchValue): Observable<any> {
        let obj = { search_val: searchValue }
        return this._httpClient.post(this.baseURL + "/drugs", obj, { headers: this.headers })
    }

    getDosage(drugId): Observable<any> {
        let obj = { drug_id: drugId }
        return this._httpClient.post(this.baseURL + "/dosage", obj, { headers: this.headers })
    }

    getQuantity(drugId, dosageId): Observable<any> {
        let obj = { drug_id: drugId, dosage: dosageId }
        return this._httpClient.post(this.baseURL + "/quantity", obj, { headers: this.headers })
    }

    drugHospitals(obj): Observable<any> {
        return this._httpClient.post(this.baseURL + "/drugHospital", obj, { headers: this.headers })
    }

    getDrugDetailsData(request): Observable<any> {
        return this._httpClient.post(this.baseURL + "/drug_detail", request, { headers: this.headers })
    }
}