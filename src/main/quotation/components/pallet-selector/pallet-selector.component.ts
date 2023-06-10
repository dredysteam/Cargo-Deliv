import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
//models
import { PalletType } from '../../models/palletType.interface';
import { StockPallet } from '../../models/stockPallet.interface';
@Component({
  selector: 'app-pallet-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pallet-selector.component.html',
  styleUrls: ['./pallet-selector.component.css'],
})
export class PalletSelectorComponent implements OnInit {
  @Input() parent: FormGroup;

  @Input() palletTypes: PalletType[];

  @Output() added = new EventEmitter<StockPallet>();
  constructor() {}

  ngOnInit(): void {}

  onAdd() {
    this.added.emit(this.parent.get('selector')?.value);
  }
}
