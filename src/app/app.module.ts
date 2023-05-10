import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// custom modules
import { AuthModule } from 'src/auth/auth.module';
import { MainModule } from 'src/main/main.module';

import { AppComponent } from './app.component';

const ROUTES: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
