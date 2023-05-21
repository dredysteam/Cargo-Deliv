import { Injectable } from '@angular/core';
//interfaces
import { Quotation } from './models/quotation.interface';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  constructor() {}

  addQuotation(quotation: Quotation) {
    // quotation.id = this.fireStore.createId();
    // return this.fireStore.collection('/Quotations').add(quotation);
    // console.log('Adding quotation' + quotation);
    // return this.http.post(`${this.url}/quotation.json`, {
    //   id: 1,
    //   name: 'Selena',
    // });
  }
}
