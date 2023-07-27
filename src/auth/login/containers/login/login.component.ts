import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

//services
import { AuthService } from 'src/auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginUser(event: FormGroup) {
    this.authService
      .loginUser(event.value.email, event.value.password)
      .then((resp) => this.router.navigate(['/dashboard']))
      .catch((error) => alert('ERROR! : ' + error));
  }
}
