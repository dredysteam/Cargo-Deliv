import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PalletType } from '../../models/palletType.interface';
import { Quotation } from '../../models/quotation.interface';
import { StockPallet } from '../../models/stockPallet.interface';
import { QuotationService } from '../../quotation.service';
@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.css'],
})
export class QuotationFormComponent implements OnInit {
  palletTypes: PalletType[] = [
    { id: 1, type: '40 x 40 ' },
    { id: 2, type: '40 x 48' },
    {
      id: 3,
      type: 'other',
    },
  ];

  form = new FormGroup({
    pickupInfo: new FormGroup({
      pickupZipcode: new FormControl(''),
      pickupDate: new FormControl(''),
      liftgate: new FormControl(''),
    }),
    deliveryInfo: new FormGroup({
      deliveryZipcode: new FormControl(''),
      appointment: new FormControl(''),
    }),
    aditionalInfo: new FormGroup({
      commodity: new FormControl(''),
      totalWeight: new FormControl(''),
      freightType: new FormControl(''),
    }),
    selector: this.createStockPallet({}),
    stockPallets: new FormArray([
      // this.createStockPallet({ type: 'other', high: 12, quantity: 10 }),
    ]),
  });
  constructor(private quotationService: QuotationService) {}

  ngOnInit(): void {}

  createStockPallet(stockPallet?: StockPallet) {
    return new FormGroup({
      type: new FormControl(stockPallet.type || ''),
      high: new FormControl(stockPallet.high || 0),
      quantity: new FormControl(stockPallet.quantity || 1),
    });
  }

  addStock(stockPallet: StockPallet) {
    const control = this.form.get('stockPallets') as FormArray;
    control.push(this.createStockPallet(stockPallet));
  }

  removeStock({ group, index }: { group: FormGroup; index: number }) {
    const control = this.form.get('stockPallets') as FormArray;
    control.removeAt(index);
  }

  handleSubmit() {
    console.log(this.form.value);
    // this.quotationService.addQuotation(this.form.value);
    // this.create.emit(quotation);
    // if (isValid) {
    //   this.create.emit(quotation);
    // }
  }
}
