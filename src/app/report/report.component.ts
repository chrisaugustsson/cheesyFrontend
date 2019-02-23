import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {
  kmom: String;
  report: Object;

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.kmom = this.route.snapshot.paramMap.get("kmom");
    this.data.getReports(this.kmom).subscribe(data => {
      this.report = data;
      console.log(data)
    })
  }
}
