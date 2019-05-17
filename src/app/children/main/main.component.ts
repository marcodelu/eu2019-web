import {Component, OnInit} from '@angular/core';
import {languages} from '../../../assets/languages';
import {HttpService} from '../../core/service/http.service';
import {MostActiveCountry} from './component/chart-most-active-countries/chart-most-active-countries.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  languages = languages;

  mostActiveContriesData = [];
  days = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.get('assets/exported_tweets_countries.json').subscribe((res: MostActiveCountry[]) => {
      this.mostActiveContriesData = res.map(i => {
        const name = this.languages.find(language => language.code === i.country.toLowerCase()).name;
        i.country = name ? name : i.country;
        return i;
      }).sort((a, b) => a.country > b.country ? 1 : -1);
    });
  }

}
