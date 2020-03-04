import {Injectable} from '@angular/core';
import {Invoice} from '../invoice/invoice';
import {HttpService} from './http.service';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoices: Invoice[];

  constructor(private httpService: HttpService) {
  }

  getInvoices(): Observable<Invoice[]> {
    return this.httpService.get();
  }

  getInvoice(id): Observable<Invoice> {
    return this.httpService.getInvoice(id);
  }
  createInvoices(invoice: Invoice): Observable<Invoice> {
    return this.httpService.createInvoice(invoice);
  }

  editInvoices(invoice: Invoice): Observable<Invoice> {
    return this.httpService.editInvoice(invoice);
  }

  deleteInvoices(invoice: Invoice): Observable<any> {
    return this.httpService.deleteInvoice(invoice);
  }
}
