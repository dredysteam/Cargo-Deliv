import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  toggled = false;

  @Input() item: any;

  @Output()
  update = new EventEmitter<any>();

  // form = this.fb.group({
  //   status: [''],
  // });
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.toggled = !this.toggled;
  }

  updateItem() {
    this.update.emit(this.item);
    this.toggled = false;
  }
}
