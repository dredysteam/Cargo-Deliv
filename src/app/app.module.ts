import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// custom modules
import { AuthModule } from 'src/auth/auth.module';
import { MainModule } from 'src/main/main.module';

//container
import { AppComponent } from './app.component';

//components
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

const ROUTES: Routes = [];

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent, FooterComponent],
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
