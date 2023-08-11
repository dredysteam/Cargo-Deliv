import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { distinctUntilChanged, tap } from 'rxjs/operators';

//services
import { AuthService, User } from 'src/auth/shared/services/auth/auth.service';
import { Store } from 'src/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  // readonly breakpoint$ = this.breakpointObserver
  //   .observe([
  //     Breakpoints.Large,
  //     Breakpoints.Medium,
  //     Breakpoints.Small,
  //     '(min-width: 500px)',
  //   ])
  //   .pipe(
  //     tap((value) => console.log(value)),
  //     distinctUntilChanged()
  //   );

  // Breakpoints = Breakpoints;
  // currentBreakpoint: string = '';

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

    // this.breakpoint$.subscribe(() => this.breakpointChanged());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // private breakpointChanged() {
  //   if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
  //     this.currentBreakpoint = Breakpoints.Large;
  //   } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
  //     this.currentBreakpoint = Breakpoints.Medium;
  //   } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
  //     this.currentBreakpoint = Breakpoints.Small;
  //   } else if (this.breakpointObserver.isMatched('(min-width: 500px)')) {
  //     this.currentBreakpoint = '(min-width: 500px)';
  //   }
  // }

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
