import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'login-container',
  styleUrls: [`app/containers/Login/login.style.css`],
  templateUrl: `app/containers/Login/login.tpl.html`
})
export class Login {
  user = {
    password: '',
    email: ''
  };

  mode: string = 'signin';
  linkText: string = 'Don\'t have an account?';

  constructor(private auth: AuthService, private router: Router) {}

  changeMode() {
    if (this.mode === 'signin') {
      this.mode = 'signup'
      this.linkText = 'Already have an account?'
    } else {
      this.mode = 'signin';
      this.linkText = 'Don\'t have an account?';
    }
  }

  authenticate() {
    this.auth.authenticate("login", this.user)
    .subscribe(() => {
      this.router.navigate(['']);
    })
  }
}
