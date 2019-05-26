import {Component, OnDestroy, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {DataService} from '../../../../core/service/data.service';
import {MostActiveLanguage} from './children/chart-most-active-languages/chart-most-active-languages.component';
import {MostActiveParty} from './children/chart-most-active-parties/chart-most-active-parties.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  mostActiveLanguagesSubscription = null;
  mostActiveLanguagesData: MostActiveLanguage[] = [];

  mostActivePartiesSubscription = null;
  mostActivePartiesData: MostActiveParty[] = [];

  totalTweets = 0;
  lastUpdate = Date();

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
        this.dataService.getMostActiveParties()
          .subscribe(res => {
            this.mostActivePartiesData = res;
          });
      });
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
