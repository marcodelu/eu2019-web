import {Component, OnDestroy, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {DataService} from '../../../../core/service/data.service';
import {MostActiveLanguage} from '../chart-most-active-languages/chart-most-active-languages.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  mostActiveLanguagesSubscription = null;
  mostActiveLanguagesData: MostActiveLanguage[] = [];

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
  }

  ngOnDestroy(): void {
    if (this.mostActiveLanguagesSubscription) {
      this.mostActiveLanguagesSubscription.unsubscribe();
    }
  }

}
