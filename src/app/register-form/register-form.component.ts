import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  register(email, password) {
    this.authService.registerUser(email, password).subscribe(
      res => {
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
  }

}
