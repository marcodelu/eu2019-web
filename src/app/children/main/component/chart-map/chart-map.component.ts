import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartOptions} from 'chart.js';
import {BaseType, select, Selection} from 'd3-selection';
import {Label} from 'ng2-charts';
import {timer} from 'rxjs';
import {ChartService} from '../../../../core/service/chart.service';
import {DataService} from '../../../../core/service/data.service';

export interface Topic {
  lang: string;
  topic: string;
  value: number;
}

@Component({
  selector: 'app-chart-map',
  templateUrl: './chart-map.component.html',
  styleUrls: ['./chart-map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChartMapComponent implements OnInit {

  topicsSubscription = null;

  topicsData: Topic[] = [];
  numberOfTopisPerLanguage = 0;

  menuValues: string[] = [];
  menuSelected: number = null;

  svg: Selection<BaseType, {}, HTMLElement, any>;

  public barChartLabels: Label[] = [];
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartOptions: ChartOptions;
  public barChartData: any[] = [
    {data: [], label: '', backgroundColor: 'rgba(255, 65, 12, 1)'}
  ];

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
            max: 100,
            suggestedMax: 100,
            beginAtZero: true,
            stepSize: 10
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
        return ' ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%';
      }
    };
    // this.barChartOptions.scales.display = false;

    this.topicsSubscription = timer(0, 60 * 1000)
      .subscribe(() => {
        this.dataService.getTopics()
          .subscribe((res: Topic[]) => {
            this.topicsData = res;
            this.buildMenu();
            this.updateChart();
          });
      });
  }

  buildMenu() {
    this.menuValues = this.topicsData
      .filter(t => t.lang === 'en')
      .map(t => t.topic);

    this.numberOfTopisPerLanguage = this.menuValues.length;

    this.menuSelected = this.menuValues.length > 0 ? 0 : null;
  }

  updateChart() {
    this.svg = select('#europe-map');

    this.resetChart();

    const topicAllLanguages: Topic[] = [];
    for (let index = this.menuSelected; index < this.topicsData.length; index += this.numberOfTopisPerLanguage) {
      topicAllLanguages.push(this.topicsData[index]);
    }

    topicAllLanguages.forEach(topic => {
      const countryTopics = this.topicsData.filter(t => t.lang === topic.lang);
      const countryTopicsSum = countryTopics.map(i => i.value).reduce((a, b) => a + b);
      const topicPercentage: number = topic.value / countryTopicsSum;

      const level = Number.isNaN(Math.floor(topicPercentage / 0.10)) ? 0 : Math.floor(topicPercentage / 0.10);

      const countryWithLanguage = this.dataService.languages.filter(l => l.langCode === topic.lang && l.multilanguage === false);

      if (countryWithLanguage.length > 0) {

        countryWithLanguage.forEach(country => {
          this.svg.select('#state-' + country.countryCode).classed('level-' + (level + 1), true);
        });

        const label = countryWithLanguage.length > 1 ? countryWithLanguage.map(c => c.state).join(', ') : countryWithLanguage[0].state;
        this.barChartLabels.push(label);

        this.barChartData[0].data.push(Math.floor(topicPercentage * 100));
        this.barChartData[0].label = this.menuValues[this.menuSelected];
      }

    });
  }

  resetChart() {
    const states = this.svg.selectAll('.state');

    states
      .classed('level-1', false)
      .classed('level-2', false)
      .classed('level-3', false)
      .classed('level-4', false)
      .classed('level-5', false)
      .classed('level-6', false)
      .classed('level-7', false)
      .classed('level-8', false)
      .classed('level-9', false)
      .classed('level-10', false)
      .classed('level-11', false);

    this.barChartLabels.length = 0;
    this.barChartData.length = 0;
    this.barChartData.push({data: [], label: '', backgroundColor: 'rgba(255, 65, 12, 1)'});
  }

  menuButtonClick(index: number) {
    this.menuSelected = index;
    this.updateChart();
  }
}
