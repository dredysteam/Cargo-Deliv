import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//containers
import { DashboardComponent } from './containers/dashboard/dashboard.component';

//components
import { HeroComponent } from './components/hero/hero.component';

const ROUTES: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent, HeroComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class DashboardModule {}
