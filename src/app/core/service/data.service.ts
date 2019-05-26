import {Injectable} from '@angular/core';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {languages} from '../../../assets/languages';
import {MostActiveLanguage} from '../../children/main/component/dashboard/children/chart-most-active-languages/chart-most-active-languages.component';
import {MostActiveParty} from '../../children/main/component/dashboard/children/chart-most-active-parties/chart-most-active-parties.component';
import {Party} from '../../children/main/component/dashboard/children/chart-parties-per-country/chart-parties-per-country.component';
import {Topic} from '../../children/main/component/dashboard/children/chart-tweets-per-topic/chart-tweets-per-topic.component';
import {HttpService} from './http.service';

@Injectable()
export class DataService {

  languages = languages;

  constructor(private httpService: HttpService) {
  }

  getMostActiveLanguages() {
    return combineLatest(
      this.httpService.get('/exported_tweets_lang.json'),
      this.httpService.get('/exported_tweets_lang_history.json'),
      this.httpService.get('/exported_tweets_lang_post.json')
    ).pipe(
      map(([currentData, historyData, postData]: [MostActiveLanguage[], MostActiveLanguage[], MostActiveLanguage[]]) => {
        const result: MostActiveLanguage[] = [];

        currentData.forEach((c, index) => {
          const historyValue = index < historyData.length ? historyData[index].value : 0;
          const postValue = index < postData.length ? postData[index].value : 0;
          c.value += historyValue;
          c.value += postValue;
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
      this.httpService.get('/exported_tweets_epgroups_history.json'),
      this.httpService.get('/exported_tweets_epgroups_post.json')
    ).pipe(
      map(([currentData, historyData, postData]: [MostActiveParty[], MostActiveParty[], MostActiveParty[]]) => {
        const result: MostActiveParty[] = [];

        currentData.forEach((c, index) => {
          const historyValue = index < historyData.length ? historyData[index].value : 0;
          const postValue = index < postData.length ? postData[index].value : 0;
          c.value += historyValue;
          c.value += postValue;

          result.push(c);
        });

        return result;
      }));
  }

  getTopics() {
    return combineLatest(
      this.httpService.get('/exported_tweets_topics.json'),
      this.httpService.get('/exported_tweets_topics_history.json'),
      this.httpService.get('/exported_tweets_topics_post.json')
    ).pipe(
      map(([currentData, historyData, postData]: [Topic[], Topic[], Topic[]]) => {
        const result: Topic[] = [];

        currentData.forEach((c, index) => {
          const historyValue = index < historyData.length ? historyData[index].value : 0;
          const postValue = index < postData.length ? postData[index].value : 0;
          c.value += historyValue;
          c.value += postValue;

          result.push(c);
        });

        return result;
      }));
  }

  getParties() {
    return combineLatest(
      this.httpService.get('/exported_tweets_parties.json'),
      this.httpService.get('/exported_tweets_parties_history.json'),
      this.httpService.get('/exported_tweets_parties_post.json')
    ).pipe(
      map(([currentData, historyData, postData]: [Party[], Party[], Party[]]) => {
        const result: Party[] = [];

        currentData.forEach((c, index) => {
          const historyValue = index < historyData.length ? historyData[index].value : 0;
          const postValue = index < postData.length ? postData[index].value : 0;
          c.value += historyValue;
          c.value += postValue;

          result.push(c);
        });

        return result;
      }));
  }
}
