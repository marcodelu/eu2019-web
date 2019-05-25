import {Component, OnInit} from '@angular/core';
import {ChartOptions} from 'chart.js';
import {BaseType, select, Selection} from 'd3-selection';
import {Label} from 'ng2-charts';
import {timer} from 'rxjs';
import {languageItem, languages} from '../../../../../assets/languages';
import {partiesData, PartyItem} from '../../../../../assets/parties';
import {ChartService} from '../../../../core/service/chart.service';
import {DataService} from '../../../../core/service/data.service';
import {Party} from '../chart-parties-per-country/chart-parties-per-country.component';

export interface PartyMerge {
  name: string;
  country: string;
  value: number;
  score: number;
}

export interface CountryScore {
  name: string;
  countryCode: string;
  score: number;
  totalTweets: number;
}

@Component({
  selector: 'app-chart-political-orientation-per-country',
  templateUrl: './chart-political-orientation-per-country.component.html',
  styleUrls: ['./chart-political-orientation-per-country.component.scss']
})
export class ChartPoliticalOrientationPerCountryComponent implements OnInit {

  partiesSubscription = null;

  partiesData: Party[] = [];
  partiesScores: PartyItem[] = partiesData;
  partiesMerge: PartyMerge[] = [];
  countryScore: CountryScore[] = [];

  languages: languageItem[] = languages;

  svg: Selection<BaseType, {}, HTMLElement, any>;

  public barChartLabels: Label[] = [];
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartOptions: ChartOptions;
  public barChartData = [];
  public barColors = [];

  constructor(private chartService: ChartService,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.barChartOptions = this.chartService.getOptions();
    this.barChartOptions.legend.display = false;
    this.barChartOptions.showLines = false;
    this.barChartOptions.layout = {
      padding: {
        left: 50,
        right: 50,
        top: 50,
        bottom: 50
      }
    };
    this.barChartOptions.scales = {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ],
      ticks: {
        min: 1,
        suggestedMin: 1,
        max: 5,
        suggestedMax: 5
      }
    };

    this.barColors = this.chartService.getPolarColors();

    this.partiesSubscription = timer(0, 60 * 1000)
      .subscribe(() => {
        this.dataService.getParties()
          .subscribe((res: Party[]) => {
            this.partiesData = res;
            this.updateChart();
          });
      });
  }

  updateChart() {
    this.svg = select('#europe-map-score');

    this.resetChart();

    this.partiesData.forEach(party => {
      const partyScore = this.partiesScores.find(p => p.country === party.country && (p.partyTwitter === party.party || p.headOfPartyTwitter === party.party));

      if (partyScore) {
        const partyMerge = this.partiesMerge.find(p => p.name === partyScore.party);

        if (partyMerge) {
          partyMerge.value += party.value;
        } else {
          this.partiesMerge.push({name: partyScore.party, country: party.country, value: party.value, score: partyScore.spectrum});
        }
      }
    });

    console.log(this.partiesMerge);

    this.languages.forEach(language => {
      const partiesByLanguage = this.partiesMerge.filter(p => p.country === language.countryCode);

      if (partiesByLanguage.length > 0) {
        // const scoreSum = partiesByLanguage.map(p => p.score).reduce((a, b) => a + b);
        const valueSum = partiesByLanguage.map(p => p.value).reduce((a, b) => a + b);

        const percentages: number[] = [0];
        partiesByLanguage.forEach(party => {
          percentages.push(party.score * party.value / valueSum);
        });

        const percentageSum = percentages.reduce((a, b) => a + b);

        this.countryScore.push({
          name: language.state,
          countryCode: language.countryCode,
          score: Number.isNaN(percentageSum) ? null : percentageSum,
          totalTweets: Number.isNaN(valueSum) ? null : valueSum
        });
      }
    });

    this.countryScore.forEach(country => {
      this.svg.select('#state-' + country.countryCode).classed('level-' + (Math.floor((country.score * 2))), true);

      if (!!country.score) {
        this.barChartLabels.push(country.name);
        this.barChartData.push(country.score.toFixed(2));
      }
    });

  }

  resetChart() {
    this.partiesMerge.length = 0;
    this.countryScore.length = 0;

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
  }

}
