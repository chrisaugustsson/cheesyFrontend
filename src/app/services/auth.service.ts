import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post("http://localhost:1337/user/login", { email, password });
  }

  storeJWT(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);

    const expiresAt = moment().add(60, 'minutes');
    localStorage.setItem("expires", JSON.stringify(expiresAt.valueOf()));
  }

  registerUser(email: string, password: string) {
    return this.http.post("http://localhost:1337/user/register", { email, password });
  }

  public isLoggedIn() {
    const expiration = localStorage.getItem("expires");
    const expiresAt = JSON.parse(expiration);
    return moment().isBefore(moment(expiresAt));
  }
}
