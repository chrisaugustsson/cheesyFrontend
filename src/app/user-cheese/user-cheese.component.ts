import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-cheese',
  templateUrl: './user-cheese.component.html',
  styleUrls: ['./user-cheese.component.css']
})
export class UserCheeseComponent implements OnInit {

  constructor(private dataService: DataService) { }

  @Input() cheese: any;
  @Input() userCheese: any;

  @Output() update = new EventEmitter<string>();

  amount: number;
  modal: Boolean;
  activeCheese = 0;
  buyIsValid = true;

  sellCheeseModal(cheese) {
    this.modal = true;
    this.activeCheese = cheese;
  }

  sellCheese(share, credits) {
    if (this.userCheese[this.activeCheese].share - share < 0) {
      this.buyIsValid = false;
    } else {
      this.dataService.sellCheese(share, this.cheese[this.activeCheese].name, credits).subscribe(data => {
        this.buyIsValid = true;
        this.modal = false;
        this.amount = null;
        this.update.emit();
        this.ngOnInit();
      });
    }
  }

  modalClick() {
    this.modal = false;
  }

  ngOnInit() {
  }

}
