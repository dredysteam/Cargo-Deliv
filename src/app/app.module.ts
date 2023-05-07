import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// custom modules
import { AuthModule } from 'src/auth/auth.module';

import { AppComponent } from './app.component';

const ROUTES: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
