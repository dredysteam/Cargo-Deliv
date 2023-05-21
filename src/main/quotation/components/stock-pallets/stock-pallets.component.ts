import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

//interface
import { StockPallet } from '../../models/stockPallet.interface';

@Component({
  selector: 'app-stock-pallets',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stock-pallets.component.html',
  styleUrls: ['./stock-pallets.component.css'],
})
export class StockPalletsComponent implements OnInit {
  @Input() parent: FormGroup;

  @Output() removed = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  get pallets() {
    return (this.parent.get('stockPallets') as FormArray).controls;
  }

  onRemove(group, index) {
    this.removed.emit({ group, index });
  }
}
