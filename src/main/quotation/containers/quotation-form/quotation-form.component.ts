import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
//interfaces
import { PalletType } from '../../models/palletType.interface';
import { Quotation } from '../../models/quotation.interface';
import { StockPallet } from '../../models/stockPallet.interface';
//service
import { QuotationService } from '../../../shared/services/quotation.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.css'],
})
export class QuotationFormComponent implements OnInit {
  quotationList: Quotation[] = [];
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
      pickupZipcode: new FormControl('', Validators.required),
      pickupDate: new FormControl('', Validators.required),
      liftgate: new FormControl(''),
    }),
    deliveryInfo: new FormGroup({
      deliveryZipcode: new FormControl('', Validators.required),
      appointment: new FormControl(''),
    }),
    aditionalInfo: new FormGroup({
      company: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      phone: new FormControl('', Validators.required),
      commodity: new FormControl(''),
      totalWeight: new FormControl(''),
      freightType: new FormControl('', Validators.required),
    }),
    selector: this.createStockPallet({}),
    stockPallets: new FormArray([
      // this.createStockPallet({ type: 'other', high: 12, quantity: 10 }),
    ]),
  });
  constructor(
    private quotationService: QuotationService,
    private router: Router
  ) {}

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

  async handleSubmit() {
    const status = 'created';
    const quotation = { status, ...this.form.value };
    await this.quotationService.addQuotation(quotation);
    // alert('Quotation added succesfully');
    this.backToHome();
  }

  //
  getAllQuotations() {
    this.quotationService.getQuotations().subscribe(
      (res) => {
        this.quotationList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err) => {
        alert('Error while fetching data');
      }
    );
  }

  backToHome() {
    Swal.fire({
      title: 'Quotation created!',
      // showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'Ok',
      // denyButtonText: `Don't save`,
    }).then((result) => {
      this.router.navigate(['']);
    });
  }
}
