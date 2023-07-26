import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { ListItemComponent } from './components/list-item/list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListItemComponent],
  imports: [CommonModule, FormsModule],
  exports: [ListItemComponent],
})
export class SharedModule {}
