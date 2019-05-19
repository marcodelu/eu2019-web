import {Component, OnDestroy, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {DataService} from '../../../../core/service/data.service';
import {MostActiveLanguage} from '../chart-most-active-countries/chart-most-active-languages.component';
import {Parties} from '../chart-parties/chart-parties.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  mostActiveLanguagesSubscription = null;
  mostActivePartiesSubscription = null;

  mostActiveLanguagesData: MostActiveLanguage[] = [];
  mostActivePartiesData: Parties[] = [];
  totalTweets = 0;
  lastUpdate = Date();

  days = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.mostActiveLanguagesSubscription = timer(0, 60 * 1000)
      .subscribe(() => {
        this.dataService.getMostActiveLanguages()
          .subscribe(res => {
            this.mostActiveLanguagesData = res;

            this.totalTweets = res.map(i => i.value).reduce((a, b) => a + b);
            this.lastUpdate = Date();
          });
      });

    this.mostActivePartiesSubscription = timer(0, 60 * 1000)
      .subscribe(() => {
        this.dataService.getParties()
          .subscribe(res => {
            this.mostActivePartiesData = res;
          });
      });

    // this.httpService.get('/exported_tweets_countries.json').subscribe((res: MostActiveLanguage[]) => {
    //   this.mostActiveLanguagesData = res.map(i => {
    //     const name = this.languages.find(lang => lang.code === i.countryCode.toLowerCase()).name;
    //     i.countryCode = name ? name : i.countryCode;
    //     return i;
    //   }).sort((a, b) => a.countryCode > b.countryCode ? 1 : -1);
    // });
    //
    // this.httpService.get('/exported_tweets_days.json').subscribe((res: any[]) => {
    //   this.days = res;
    // });
  }

  ngOnDestroy(): void {
    if (this.mostActiveLanguagesSubscription) {
      this.mostActiveLanguagesSubscription.unsubscribe();
    }

    if (this.mostActivePartiesSubscription) {
      this.mostActivePartiesSubscription.unsubscribe();
    }
  }

}
