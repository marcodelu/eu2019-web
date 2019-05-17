import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';
import {ChartService} from '../../../../core/service/chart.service';

export interface MostActiveCountry {
  country: string;
  value: number;
}

@Component({
  selector: 'app-chart-most-active-countries',
  templateUrl: './chart-most-active-countries.component.html',
  styleUrls: ['./chart-most-active-countries.component.scss']
})
export class ChartMostActiveCountriesComponent implements OnInit, OnChanges {

  @Input() data: [MostActiveCountry];

  public pieChartOptions: ChartOptions;
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieColors = [];

  constructor(private chartService: ChartService) {
  }

  ngOnInit() {
    this.pieChartOptions = this.chartService.getOptions();
    this.pieChartOptions.legend.position = 'bottom';
    this.pieChartOptions.layout = {
      padding: {
        left: 0,
        right: 0,
        top: 20,
        bottom: 0
      }
    };

    this.pieColors = this.chartService.getColors();

    this.parseData();
  }

  ngOnChanges(c: SimpleChanges) {
    if (c.data.previousValue && c.data.previousValue !== c.data.currentValue) {
      this.parseData();
    }
  }

  parseData() {
    this.pieChartLabels.length = 0;
    this.pieChartLabels.push(...this.data.map(label => label.country));
    this.pieChartData.length = 0;
    this.pieChartData.push(...this.data.map(label => label.value));
  }

}
