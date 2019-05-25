import {Component, OnInit} from '@angular/core';
import {ChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';
import {timer} from 'rxjs';
import {languageItem, languages} from '../../../../../assets/languages';
import {ChartService} from '../../../../core/service/chart.service';
import {DataService} from '../../../../core/service/data.service';

export interface Party {
  country: string;
  language: string;
  party: string;
  value: number;
}

@Component({
  selector: 'app-chart-parties-per-country',
  templateUrl: './chart-parties-per-country.component.html',
  styleUrls: ['./chart-parties-per-country.component.scss']
})
export class ChartPartiesPerCountryComponent implements OnInit {

  mostActivePartiesSubscription = null;
  mostActivePartiesData: Party[] = [];

  public barChartLabels: Label[] = [];
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartOptions: ChartOptions;
  public barChartData: any[] = [
    {data: [], label: '', backgroundColor: 'rgba(255, 65, 12, 1)'}
  ];

  menuValues: languageItem[] = [];
  menuSelected: languageItem = null;

  constructor(private chartService: ChartService,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.barChartOptions = this.chartService.getOptions();
    this.barChartOptions.legend.display = false;
    this.barChartOptions.showLines = false;
    this.barChartOptions.scales = {
      xAxes: [
        {
          display: false,
          ticks: {
            min: 0,
            suggestedMin: 0,
            beginAtZero: true
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            color: 'rgba(0, 0, 0, 0)'
          },
          display: true
        }
      ]
    };
    this.barChartOptions.tooltips.callbacks = {
      label(tooltipItem: Chart.ChartTooltipItem, data: Chart.ChartData): string | string[] {
        return ' ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + ' tweets';
      }
    };

    this.menuValues = languages;
    this.menuSelected = this.menuValues[13];

    this.mostActivePartiesSubscription = timer(0, 60 * 1000)
      .subscribe(() => {
        this.dataService.getParties()
          .subscribe(res => {
            this.mostActivePartiesData = res;
            this.parseData();
          });
      });
  }

  parseData() {
    const filtredData = this.mostActivePartiesData.filter(d => d.country === this.menuSelected.countryCode);
    const output: Party[] = [];

    filtredData.forEach((item) => {
      const index = output.findIndex(o => o.party === item.party);
      if (index > -1) {
        output[index].value += item.value;
      } else {
        output.push(item);
      }
    });

    this.barChartLabels.length = 0;
    this.barChartData.length = 0;
    this.barChartData.push({data: [], label: '', backgroundColor: 'rgba(255, 65, 12, 1)'});

    this.barChartLabels.push(...output.map(d => d.party));
    this.barChartData[0].data.push(...output.map(d => d.value));
  }

  menuButtonClick(value) {
    this.menuSelected = value;
    this.parseData();
  }
}
