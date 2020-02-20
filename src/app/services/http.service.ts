import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Invoice} from '../invoice/invoice';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiEndpoint;
  }

  get(): Observable<Invoice[]> {
    return this.httpClient.get(this.url)
      .pipe(map(response => {
        return response as Invoice[];
      }));
  }

  getTask(id): Observable<Invoice> {
    return this.httpClient.get(this.url + '/id:' + id)
      .pipe(map(response => {
        return response as Invoice;
      }));
  }
}
