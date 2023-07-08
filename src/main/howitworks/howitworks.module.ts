import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//containers
import { HowitworksComponent } from './containers/howitworks/howitworks.component';

const ROUTES: Routes = [{ path: '', component: HowitworksComponent }];

@NgModule({
  declarations: [HowitworksComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class HowitworksModule {}
