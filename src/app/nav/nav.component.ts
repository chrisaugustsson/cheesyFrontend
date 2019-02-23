import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  loggedIn: boolean

  ngOnInit() {
  }

  ngDoCheck() {
    this.loggedIn = this.authService.isLoggedIn();
  }
}
