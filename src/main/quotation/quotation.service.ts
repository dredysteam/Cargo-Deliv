import { Injectable } from '@angular/core';
//interfaces
import { Quotation } from './models/quotation.interface';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  constructor(private firestore: AngularFirestore) {}

  addQuotation(quotation: Quotation) {
    console.log('Adding quotation' + quotation);

    //disabled temp para no subirlo al backend
    // quotation.id = this.firestore.createId();
    // return this.firestore.collection('/Quotations').add(quotation);

    // return this.http.post(`${this.url}/quotation.json`, {
    //   id: 1,
    //   name: 'Selena',
    // });
  }

  getQuotations() {
    return this.firestore.collection('/Quotations').snapshotChanges();
  }

  deleteQuotation(quotation: Quotation) {
    return this.firestore.doc('/Quotations/' + quotation.id).delete();
  }

  updateQuotation(quotation: Quotation) {
    this.deleteQuotation(quotation);
    this.addQuotation(quotation);
  }
}
