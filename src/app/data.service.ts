import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMe() {
    return this.http.get("https://me-api.chau17.me");
  }

  getReports(kmom) {
    return this.http.get("https://me-api.chau17.me/reports/" + kmom);
  }


}
