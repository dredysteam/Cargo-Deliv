import { Component, OnDestroy, OnInit } from '@angular/core';

// services
OrdersService;
import { OrdersService } from 'src/main/shared/services/orders.service';
import { QuotationService } from 'src/main/shared/services/quotation.service';

import { Observable, Subscription } from 'rxjs';
import { Store } from 'src/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit, OnDestroy {
  orders: any;

  orders$: Observable<any[]>;
  subscription: Subscription;

  expression: boolean = true;
  constructor(
    private quotationService: QuotationService,
    private ordersService: OrdersService,
    private store: Store
  ) {}

  ngOnInit(): void {
    // this.ordersService.getQuotations().subscribe((res: any) => {
    //   this.orders = res.map((e: any) => {
    //     const data = e.payload.doc.data();
    //     data.id = e.payload.id;
    //     console.log(data);
    //     return data;
    //   });
    // });

    // this.orders$ = this.store.select<any[]>('orders');
    this.orders$ = this.ordersService.getQuotations();
    this.subscription = this.ordersService.orders$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateOrder(event: any) {
    console.log(event);
    this.quotationService
      .updateQuotation(event)
      .then(() => alert('Update successfull!'))
      .catch((error) => {
        alert('Error to update document : ' + error);
      });
  }
}
