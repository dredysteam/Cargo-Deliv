import { Injectable } from '@angular/core';
//interfaces
import { Quotation } from '../../quotation/models/quotation.interface';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  constructor(private firestore: AngularFirestore) {}

  addQuotation(quotation: any) {
    console.log('Adding quotation' + quotation);

    quotation.id = this.firestore.createId();
    return this.firestore.collection('/Quotations').add(quotation);

    // return this.http.post(`${this.url}/quotation.json`, {
    //   id: 1,
    //   name: 'Selena',
    // });
  }

  getQuotations() {
    return this.firestore.collection('/Quotations').snapshotChanges();
  }

  deleteQuotation(quotation: any) {
    return this.firestore.doc('/Quotations/' + quotation.id).delete();
  }

  updateQuotation(quotation: any) {
    // this.deleteQuotation(quotation);
    // this.addQuotation(quotation);
    return this.firestore
      .collection('/Quotations')
      .doc(quotation.uid)
      .update(quotation);
  }
}
