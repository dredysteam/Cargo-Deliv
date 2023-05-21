import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// feature modules
import { AuthModule } from 'src/auth/auth.module';
import { MainModule } from 'src/main/main.module';

//container
import { AppComponent } from './app.component';

//components
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HeaderComponent, NavComponent],
})
export class AppModule {}
