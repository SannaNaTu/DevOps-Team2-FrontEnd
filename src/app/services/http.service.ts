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

  private url: string;

  constructor(private httpClient: HttpClient) {
   this.url = environment.apiEndpointUrl;
  }

  get(): Observable<Invoice[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
        return response as Invoice[];
      }));
  }

  getInvoice(id): Observable<Invoice> {
    return this.httpClient.get(this.url + '/' + id)
      .pipe(map(response => {
        return response as Invoice;
      }));
  }
  editInvoice(invoice: Invoice): Observable<Invoice> {
    return this.httpClient.put(this.url + '/' + invoice.id, invoice).pipe(map(response => {
      return response as Invoice;
    }));
  }

  createInvoice(invoice: Invoice): Observable<Invoice> {
    return this.httpClient.post(this.url, invoice).pipe(map(response => {
      return response as Invoice;
    }));
  }

  deleteInvoice(invoice: Invoice): Observable<any> {
    return this.httpClient.delete(this.url + '/' + invoice.id);
  }
}
