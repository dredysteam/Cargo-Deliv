import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//components
import { AuthFormComponent } from './components/auth-form/auth-form.component';

//services
import { AuthService } from './services/auth/auth.service';

AuthService;
@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AuthFormComponent],
  providers: [AuthService],
})
export class SharedModule {}
