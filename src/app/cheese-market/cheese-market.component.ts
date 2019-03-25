import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { BaseChartDirective, Color } from 'ng2-charts';
import * as moment from 'moment';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-cheese-market',
  templateUrl: './cheese-market.component.html',
  styleUrls: ['./cheese-market.component.css']
})
export class CheeseMarketComponent implements OnInit {
  @ViewChild(BaseChartDirective) public chart: BaseChartDirective;

  constructor(private dataService: DataService) { }

  @Input() cheese: any;
  @Input() userCredits: number;

  @Output() update = new EventEmitter<string>();

  activeGraph = 0;
  modal = false;
  amount: number;
  buyIsValid = true;

  modalClick() {
    this.modal = false;
  }

  activateModal() {
    this.modal = true;
  }

  activateGraph(number) {
    this.activeGraph = number
    this.updateGraph(1);
  }

  buyCheese(share, credits) {
    if (this.userCredits - credits < 0) {
      this.buyIsValid = false;
    } else {
      this.dataService.buyCheese(share, this.cheese[this.activeGraph].name, credits).subscribe(data => {
        this.buyIsValid = true;
        this.modal = false;
        this.amount = null;
        this.update.emit();
        this.ngOnInit();
      });
    }
  }

  updateGraph(updateRate) {
    let cheese = this.cheese[this.activeGraph].history.splice(-100, this.cheese[this.activeGraph].history.length)
    this.lineChartData[0].data = cheese
    this.lineChartLabels = this.cheese[this.activeGraph].timeStamp.splice(-100, this.cheese[this.activeGraph].timeStamp.length).map(time => {
      return moment(time)
    });

    if (this.chart) {
      this.chart.chart.data.datasets[0].data = cheese
      this.chart.chart.data.datasets[0].label = this.cheese[this.activeGraph].name
      this.chart.chart.update(updateRate);
    }
  }

  public lineChartData = [{ data: [1, 2, 3], label: "Hej" }];

  public lineChartLabels = [];
  public lineChartOptions = {
    elements: {
      line: {
        tension: 0
      }
    },
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
        type: 'time',
        distribution: "series",
        time: {
          displayFormats: {
            hour: 'hA'
          },
          stepSize: 10
        },
        ticks: {
          source: "labels",
          autoSkip: true,
          maxRotation: 0
        }
      }],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'right',
        }
      ]
    },

  };

  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend = false;
  public lineChartType = 'line';

  ngOnInit() {
  }

  ngDoCheck() {

  }

  ngOnChanges() {
    this.updateGraph(0);
  }


}
