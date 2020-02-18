import { Component, OnInit } from '@angular/core';
import { Invoice} from './invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoice: Invoice;

  constructor() {
    this.invoice = new Invoice();
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.invoice);

  }
}
