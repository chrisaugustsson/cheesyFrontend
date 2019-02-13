import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService) {
    console.log(localStorage.getItem("token"))
    console.log(this.authService.isLoggedIn())
  }

  login(email: string, password: string) {
    this.authService.login(email, password).subscribe((res) => {
      this.authService.storeJWT(res["result"]["data"]["token"]);
    })
  }

  ngOnInit() {
  }

}
