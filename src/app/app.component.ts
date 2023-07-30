import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

//services
import { AuthService, User } from 'src/auth/shared/services/auth/auth.service';
import { Store } from 'src/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Cargo-Deliv';

  user$: Observable<User>;
  subscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    // this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onLogout() {
    this.authService
      .logout()
      .then((resp) => {
        this.store.set('user', null);
        this.router.navigate(['/auth']);
      })
      .catch((error) => alert('ERROR! :' + error));
  }
}
