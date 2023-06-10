import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pickup-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pickup-info.component.html',
  styleUrls: ['./pickup-info.component.css'],
})
export class PickupInfoComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
