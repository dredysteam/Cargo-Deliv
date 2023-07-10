import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aditional-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './aditional-info.component.html',
  styleUrls: ['./aditional-info.component.css'],
})
export class AditionalInfoComponent implements OnInit {
  @Input() parent: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  required(name: string) {
    return (
      this.parent.get(`aditionalInfo.${name}`).hasError('required') &&
      this.parent.get(`aditionalInfo.${name}`).touched
    );
  }
}
