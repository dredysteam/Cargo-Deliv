import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//containers
import { OrdersComponent } from './containers/orders/orders.component';

const ROUTES: Routes = [
  {
    path: '',
    component: OrdersComponent,
  },
];

@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class OrdersModule {}
