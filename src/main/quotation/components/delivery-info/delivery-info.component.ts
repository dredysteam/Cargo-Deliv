import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delivery-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.css'],
})
export class DeliveryInfoComponent implements OnInit {
  @Input() parent: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
