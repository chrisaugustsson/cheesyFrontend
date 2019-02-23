import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {

  constructor(private data: DataService) { }

  newReport(name, content) {
    this.data.createReport(name, content).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
