import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {languages} from '../../../assets/languages';
import {MostActiveCountry} from '../../children/main/component/chart-most-active-countries/chart-most-active-countries.component';
import {HttpService} from './http.service';

@Injectable()
export class DataService {

  languages = languages;

  constructor(private httpService: HttpService) {
  }

  getMostActiveCountries() {
    return this.httpService.get('/exported_tweets_countries.json')
      .pipe(
        map((mostActiveCountries: MostActiveCountry[]) => {
          return mostActiveCountries
            .filter(mostActiveCountry => mostActiveCountry.country.toLowerCase() !== 'und')
            .map(mostActiveCountry => {
              const name = this.languages.find(language => language.code === mostActiveCountry.country.toLowerCase()).name;
              mostActiveCountry.country = name ? name : mostActiveCountry.country;
              return mostActiveCountry;
            })
            .sort((a, b) => a.country > b.country ? 1 : -1);
        })
      );
  }
}
