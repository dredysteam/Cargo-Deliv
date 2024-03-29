import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from '@angular/fire/compat';

// feature modules
import { AuthModule } from 'src/auth/auth.module';
import { MainModule } from 'src/main/main.module';

//container
import { AppComponent } from './app.component';

//components
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

// firebase variables auto created
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

//store
import { Store } from 'src/store';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent, FooterComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    MainModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    // BrowserAnimationsModule,
  ],
  providers: [Store],
  bootstrap: [AppComponent],
  exports: [HeaderComponent, NavComponent],
})
export class AppModule {}
