import { Component } from '@angular/core';
import { Router } from '@angular/router';

//services
import { AuthService } from 'src/auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Cargo-Deliv';

  constructor(private authService: AuthService, private router: Router) {}

  signoutUser() {
    this.authService
      .logout()
      .then((resp) => this.router.navigate(['/dashboard']))
      .catch((error) => alert('ERROR! :' + error));
  }
}
