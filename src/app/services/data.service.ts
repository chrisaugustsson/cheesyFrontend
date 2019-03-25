import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': token
      })
    };

    return this.http.post("http://localhost:1337/user/info", { user }, httpOptions)
  }

  makeDeposit(amount) {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': token
      })
    };

    return this.http.post("http://localhost:1337/user/deposit", { amount, user }, httpOptions)
  }

  buyCheese(share, cheese, credits) {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': token
      })
    };
    return this.http.post("http://localhost:1337/user/buyCheese", { share, cheese, user, credits }, httpOptions)
  }

  sellCheese(share, cheese, credits) {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': token
      })
    };
    return this.http.post("http://localhost:1337/user/sellCheese", { share, cheese, user, credits }, httpOptions)
  }
}
