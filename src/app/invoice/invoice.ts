export class Invoice {
  id: number;
  invoiceSender: string;
  recipientName: string;
  recipientIBAN: string;
  reference: string;
  invoiceNumber: string;
  bic: string;
  total: bigint;
  dueDate: string;
  date: string;

  constructor(id?: number,
              invoiceSender?: string,
              recipientName?: string,
              recipientIBAN?: string,
              reference?: string,
              invoiceNumber?: string,
              bic?: string,
              total?: bigint,
              dueDate?: string,
              date?: string) {
    this.id = id;
    this.invoiceSender = invoiceSender;
    this.recipientName = recipientName;
    this.recipientIBAN = recipientIBAN;
    this.reference = reference;
    this.invoiceNumber = invoiceNumber;
    this.bic = bic;
    this.total = total;
    this.dueDate = dueDate;
    this.date = date;
  }

}
