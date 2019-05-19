import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {languages} from '../../../assets/languages';
import {MostActiveLanguage} from '../../children/main/component/chart-most-active-countries/chart-most-active-languages.component';
import {HttpService} from './http.service';

@Injectable()
export class DataService {

  languages = languages;

  constructor(private httpService: HttpService) {
  }

  getMostActiveLanguages() {
    return this.httpService.get('/exported_tweets_lang.json')
      .pipe(
        map((mostActiveLanguages: MostActiveLanguage[]) => {
          return mostActiveLanguages
            .map((mostActiveLanguage: MostActiveLanguage) => {
              const languageHelper = this.languages.find(language => language.langCode === mostActiveLanguage.lang);
              mostActiveLanguage.lang = (languageHelper && languageHelper.language) ? languageHelper.language : mostActiveLanguage.lang;
              return mostActiveLanguage;
            })
            .sort((a, b) => a.lang > b.lang ? 1 : -1);
        })
      );
  }

  getTopics() {
    return this.httpService.get('/exported_tweets_topics.json');
  }
}
