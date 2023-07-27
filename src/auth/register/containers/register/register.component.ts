import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
//services
import { AuthService } from 'src/auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerUser(event: FormGroup) {
    this.authService
      .createUser(event.value.email, event.value.password)
      .then((resp) => this.router.navigate(['/auth']))
      .catch((error) => alert('ERROR' + error));
  }
}
