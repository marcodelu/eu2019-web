import {Component, OnDestroy, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {DataService} from '../../core/service/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  mostActiveContriesSubscription = null;

  mostActiveContriesData = [];
  days = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.mostActiveContriesSubscription = timer(0, 5 * 60 * 1000)
      .subscribe(() => {
        this.dataService.getMostActiveCountries()
          .subscribe(res => this.mostActiveContriesData = res);
      });

    // this.httpService.get('/exported_tweets_countries.json').subscribe((res: MostActiveCountry[]) => {
    //   this.mostActiveContriesData = res.map(i => {
    //     const name = this.languages.find(language => language.code === i.country.toLowerCase()).name;
    //     i.country = name ? name : i.country;
    //     return i;
    //   }).sort((a, b) => a.country > b.country ? 1 : -1);
    // });
    //
    // this.httpService.get('/exported_tweets_days.json').subscribe((res: any[]) => {
    //   this.days = res;
    // });
  }

  ngOnDestroy(): void {
    this.mostActiveContriesSubscription.unsubscribe();
  }
}
