import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'register-container',
  styleUrls: [`app/containers/Register/register.style.css`],
  template: `
    <div class="auth row center-xs middle-xs">
      <h4 class="col-xs-8 title">
          Sign Up
      </h4>
      <form class="col-xs-6 shadow-2" (ngSubmit)="registerUser()" #authForm="ngForm">
        <div class="inputs row center-xs middle-xs">
          <error-pannel
            class="col-xs-8"
            [errors]="errors"
            (linkClick)="onlinkClick($event)"
          ></error-pannel>
          
          <input
            class="col-xs-8"
            type="email"
            name="email"
            placeholder="email"
            [(ngModel)]="user.email"
            #email="ngModel"
          >
          <input
            class="col-xs-8"
            type="password"
            name="password"
            placeholder="password"
            [(ngModel)]="user.password"
            #password="ngModel"
          >
          <div class="actions col-xs-12">
            <div class="row center-xs">
              <button
                type="submit"
                class="btn-light"
              >
                Register
              </button>
              <a (click)="redirectToLogin()" class="btn-light link">
                Already have an account?
              </a>
           </div>
         </div>
        </div>
      </form>
    </div>
  `
})
export class Register {
  user = {
    firstName: '',
    lastName: '',
    mobile: '',
    password: '',
    email: ''
  };
  errors = [];

  constructor(private auth: AuthService, private router: Router) {
  }

  onlinkClick(error) {
    console.log(error);
  }

  redirectToLogin() {
  }

  registerUser() {
    this.validateForm();
    if(this.errors.length == 0) {
      this.auth.authenticate("", this.user)
      .subscribe(() => this.router.navigate(['']));
    }
  }


  validateForm() {
    this.errors = [];
    if(this.user.firstName == '') {
      var error = { Id: 'firstName', Text: 'Please enter First Name'}
      this.errors.push(error);
    }
    if(this.user.lastName == '') {
      var error = { Id: 'lastName', Text: 'Please enter Last Name'}
      this.errors.push(error);
    }
    if(this.user.email == '') {
      var error = { Id: 'email', Text: 'Please enter valid email'}
      this.errors.push(error);
    }
    if(this.user.mobile == '') {
      var error = { Id: 'mobile', Text: 'Please enter valid mobile'}
      this.errors.push(error);
    }
    if(this.user.password == '') {
      var error = { Id: 'password', Text: 'Please enter password'}
      this.errors.push(error);
    }
  }

}
