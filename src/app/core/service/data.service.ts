import {Injectable} from '@angular/core';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {languages} from '../../../assets/languages';
import {Topic} from '../../children/main/component/chart-map/chart-map.component';
import {MostActiveLanguage} from '../../children/main/component/chart-most-active-languages/chart-most-active-languages.component';
import {MostActiveParty} from '../../children/main/component/chart-most-active-parties/chart-most-active-parties.component';
import {Parties} from '../../children/main/component/chart-parties/chart-parties.component';
import {HttpService} from './http.service';

@Injectable()
export class DataService {

  languages = languages;

  constructor(private httpService: HttpService) {
  }

  getMostActiveLanguages() {
    return combineLatest(
      this.httpService.get('/exported_tweets_lang.json'),
      this.httpService.get('/exported_tweets_lang_history.json')
    ).pipe(
      map(([currentData, historyData]: [MostActiveLanguage[], MostActiveLanguage[]]) => {
        const result: MostActiveLanguage[] = [];

        currentData.forEach((c, index) => {
          const historyValue = index < historyData.length ? historyData[index].value : 0;
          c.value += historyValue;
          result.push(c);
        });

        return result;
      }),
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

  getMostActiveParties() {
    return combineLatest(
      this.httpService.get('/exported_tweets_epgroups.json'),
      this.httpService.get('/exported_tweets_epgroups_history.json')
    ).pipe(
      map(([currentData, historyData]: [MostActiveParty[], MostActiveParty[]]) => {
        const result: MostActiveParty[] = [];

        currentData.forEach((c, index) => {
          const historyValue = index < historyData.length ? historyData[index].value : 0;
          c.value += historyValue;
          result.push(c);
        });

        return result;
      }));
  }

  getTopics() {
    return combineLatest(
      this.httpService.get('/exported_tweets_topics.json'),
      this.httpService.get('/exported_tweets_topics_history.json')
    ).pipe(
      map(([currentData, historyData]: [Topic[], Topic[]]) => {
        const result: Topic[] = [];

        currentData.forEach((c, index) => {
          const historyValue = index < historyData.length ? historyData[index].value : 0;
          c.value += historyValue;
          result.push(c);
        });

        return result;
      }));
  }

  getParties() {
    return combineLatest(
      this.httpService.get('/exported_tweets_parties.json'),
      this.httpService.get('/exported_tweets_parties_history.json')
    ).pipe(
      map(([currentData, historyData]: [Parties[], Parties[]]) => {
        const result: Parties[] = [];

        currentData.forEach((c, index) => {
          const historyValue = index < historyData.length ? historyData[index].value : 0;
          c.value += historyValue;
          result.push(c);
        });

        return result;
      }));
  }
}
