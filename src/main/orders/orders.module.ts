import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//containers
import { OrdersComponent } from './containers/orders/orders.component';

//services
import { OrdersService } from '../shared/services/orders.service';

// shared module
import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
  {
    path: '',
    component: OrdersComponent,
  },
];

@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
  providers: [OrdersService],
})
export class OrdersModule {}
