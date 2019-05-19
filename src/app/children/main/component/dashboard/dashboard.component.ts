import {Component, OnDestroy, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {DataService} from '../../../../core/service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  mostActiveLanguagesSubscription = null;

  mostActiveLanguagesData = [];
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
  }

}
