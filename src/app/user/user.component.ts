import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { CheeseService } from '../services/cheese.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private dataServive: DataService,
    private router: Router,
    private cheeseService: CheeseService
  ) {
    if (!authService.isLoggedIn()) {
      router.navigate(['']);
    }
  }

  selection: Boolean;
  user: String;
  credits: Number;
  modal = false;
  amount: Number;
  cheese: Object;
  userCheese: Object;

  makeDeposit() {
    this.dataServive.makeDeposit(this.amount).subscribe(data => {
      this.modal = false;
      this.amount = null;
      this.ngOnInit();
    })
  }

  modalClick() {
    this.modal = false;
  }

  updateCredits() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.cheeseService.connect();
    this.cheeseService.getCheese().subscribe(data => {
      this.cheese = data;
    });
    this.user = localStorage.getItem("user");
    this.dataServive.getUserInfo().subscribe(data => {
      let credits = data.result.credits;
      if (credits === null) {
        credits = 0;
      }
      this.credits = credits;
      this.userCheese = data.result.cheese;
    })
  }

}
