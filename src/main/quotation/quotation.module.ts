import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { QuotationFormComponent } from './containers/quotation-form/quotation-form.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: QuotationFormComponent,
  },
];

@NgModule({
  declarations: [QuotationFormComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class QuotationModule {}
