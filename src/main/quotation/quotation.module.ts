import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// containers
import { QuotationFormComponent } from './containers/quotation-form/quotation-form.component';

//components
import { AditionalInfoComponent } from './components/aditional-info/aditional-info.component';
import { DeliveryInfoComponent } from './components/delivery-info/delivery-info.component';
import { PalletSelectorComponent } from './components/pallet-selector/pallet-selector.component';
import { PickupInfoComponent } from './components/pickup-info/pickup-info.component';
import { StockPalletsComponent } from './components/stock-pallets/stock-pallets.component';

const ROUTES: Routes = [
  {
    path: '',
    component: QuotationFormComponent,
  },
];

@NgModule({
  declarations: [
    QuotationFormComponent,
    AditionalInfoComponent,
    DeliveryInfoComponent,
    PalletSelectorComponent,
    PickupInfoComponent,
    StockPalletsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class QuotationModule {}
