import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BaseType, select, Selection} from 'd3-selection';
import {timer} from 'rxjs';
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

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.topicsSubscription = timer(0, 600000 * 1000)
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
      const topicPercentage = topic.value / countryTopicsSum;

      const level = Number.isNaN(Math.floor(topicPercentage / 0.10)) ? 0 : Math.floor(topicPercentage / 0.10);

      const countryWithLanguage = this.dataService.languages.filter(l => l.langCode === topic.lang);

      countryWithLanguage.forEach(country => {
        this.svg.select('#state-' + country.countryCode).classed('level-' + (level + 1), true);
      });
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
  }

  menuButtonClick(index: number) {
    this.menuSelected = index;
    this.updateChart();
  }
}
