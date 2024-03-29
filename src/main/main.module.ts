import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

//shared module
import { SharedModule } from 'src/auth/shared/shared.module';
import { AdminGuard } from 'src/auth/shared/guards/admin.guard';

SharedModule;

const ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'quotation',
    loadChildren: () =>
      import('./quotation/quotation.module').then((m) => m.QuotationModule),
  },
  {
    path: 'howitworks',
    loadChildren: () =>
      import('./howitworks/howitworks.module').then((m) => m.HowitworksModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
    canActivate: [AdminGuard],
    // ...canActivate(() => redirectUnauthorizedTo(['/auth'])),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class MainModule {}
