import { Injectable } from '@angular/core';
import { Store } from 'src/store';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders$: Observable<any[]> = this.firestore
    .collection('/Quotations')
    .snapshotChanges()
    .pipe(tap((next) => this.store.set('meals', next)));

  constructor(private store: Store, private firestore: AngularFirestore) {}

  getQuotations() {
    return this.firestore
      .collection('/Quotations')
      .snapshotChanges()
      .pipe(
        map((res) =>
          res.map((q: any) => {
            let data = q.payload.doc.data();
            // const uid = q.payload.doc.id;
            // return data;
            return {
              uid: q.payload.doc.id,
              ...data,
            };
          })
        )
      );
  }
}
