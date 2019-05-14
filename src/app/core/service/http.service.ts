import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError as observableThrowError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class HttpService {
  private commonHeaders: HttpHeaders;
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.commonHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
  }

  public get(url: string, params?: HttpParams): Observable<any> {
    const newUrl = this.baseUrl + url;
    return this.http.get(newUrl, {
      headers: this.commonHeaders,
      params,
      responseType: 'json',
      withCredentials: true
    })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error): Observable<any> {
    return observableThrowError(new Error(error));
  }
}

