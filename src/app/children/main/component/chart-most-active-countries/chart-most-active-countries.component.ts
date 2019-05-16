import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';

export interface MostActiveCountry {
  country: string;
  value: number;
}

@Component({
  selector: 'app-chart-most-active-countries',
  templateUrl: './chart-most-active-countries.component.html',
  styleUrls: ['./chart-most-active-countries.component.scss']
})
export class ChartMostActiveCountriesComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  @Input() data: [MostActiveCountry];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    title: null,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontFamily: 'Montserrat, sans-serif'
      },
      position: 'bottom'
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 20,
        bottom: 0
      }
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartLegend = true;
  public pieChartPlugins = [
    {
      beforeInit: (chart, options) => {
        chart.legend.afterFit = () => {
          if (chart.legend.margins) {
            // Put some padding around the legend/labels
            chart.legend.options.labels.padding = 20;
            // Because you added 20px of padding around the whole legend,
            // you will need to increase the height of the chart to fit it
            chart.height += 40;
          }
        };
      }
    }
  ];
  public pieColors = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(91, 192, 235, 1)',
        'rgba(253, 231, 76, 1)',
        'rgba(155, 197, 61, 1)',
        'rgba(229, 89, 52, 1)',
        'rgba(250, 121, 33, 1)',
        'rgba(23, 18, 25, 1)'
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
    this.parseData();
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  ngOnChanges(c: SimpleChanges) {
    if (c.data.previousValue && c.data.previousValue !== c.data.currentValue) {
      this.parseData();
      console.log(this.data);
    }
  }

  parseData() {
    this.pieChartLabels.length = 0;
    this.pieChartLabels.push(...this.data.map(label => label.country));
    this.pieChartData.length = 0;
    this.pieChartData.push(...this.data.map(label => label.value));
  }

}
