import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../core/service/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  mostActiveContriesData = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.get('assets/exported_tweets_countries.json').subscribe(res => {
      this.mostActiveContriesData = res;
    });
  }

}
