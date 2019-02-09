import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  me: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMe().subscribe(data => {
      this.me = data;
    })
  }

}
