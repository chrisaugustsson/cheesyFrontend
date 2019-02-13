import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

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

  createReport(name: string, content: string) {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': token
      })
    };

    return this.http.post("https://me-api.chau17.me/reports", { name, content }, httpOptions)
  }


}
