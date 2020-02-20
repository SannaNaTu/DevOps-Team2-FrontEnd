import {Injectable} from '@angular/core';
import {Invoice} from '../invoice/invoice';
import {HttpService} from './http.service';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  tasks: Invoice[];
  // tslint:disable-next-line:variable-name
  private _login: Subject<any> = new Subject<any>();
  public login = this._login.asObservable();

  constructor(private httpService: HttpService) {
  }

  getTasks(): Observable<Invoice[]> {
    this.httpService.get()
      .subscribe(response => {
        this.tasks = response;
      });
    return this.httpService.get();
  }

  getTask(id): Observable<Invoice> {
    return this.httpService.getTask(id);
  }

  setLogin(value) {
    this._login.next(value);
  }
}
