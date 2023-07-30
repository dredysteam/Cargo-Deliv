import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

//services
import { AuthService, User } from 'src/auth/shared/services/auth/auth.service';
import { Store } from 'src/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {}

  loginUser(event: FormGroup) {
    this.authService
      .loginUser(event.value.email, event.value.password)
      .then((userCredencial: any) => {
        if (!userCredencial) {
          this.store.set('user', null);
          return;
        }
        const user: User = {
          email: userCredencial.user.email,
          uid: userCredencial.user.uid,
          authenticated: true,
        };
        console.log(user);
        this.store.set('user', user);
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => alert('ERROR! : ' + error));
  }
}
