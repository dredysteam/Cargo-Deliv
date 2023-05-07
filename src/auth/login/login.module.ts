import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// custom modules
import { SharedModule } from '../shared/shared.module';

//containers

import { LoginComponent } from './containers/login/login.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
})
export class LoginModule {}
