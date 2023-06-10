import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

// firebase variables auto created
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HeaderComponent, NavComponent],
})
export class AppModule {}
