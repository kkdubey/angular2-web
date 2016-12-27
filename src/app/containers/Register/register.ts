import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'register-container',
  styleUrls: [`app/containers/Register/register.style.css`],
  template: `
    <div class="contaner ">
      <form (ngSubmit)="registerUser()">
        <h4 class="col-xs-12 title center-xs ">
            Sign Up
        </h4>
          <error-pannel
              class="col-xs-12"
              [errors]="errors"
              (linkClick)="onlinkClick($event)"
          ></error-pannel>
        <div class="row">
          <md-input-container class="col-xs-12 col-lg-4" >
            <input md-input placeholder="First Name"
              type="text"
              name="firstName"
              id="firstName"
              [(ngModel)]="user.firstName"
              #firstName="ngModel"
            >
          </md-input-container>        
          <md-input-container class="col-xs-12 col-lg-4" >
            <input md-input placeholder="Middle Name"
              type="text"
              name="middleName"
              id="middleName"
              [(ngModel)]="user.middleName"
              #middleName="ngModel"
            >
          </md-input-container>
          <md-input-container class="col-xs-12 col-lg-4" >
            <input md-input placeholder="Last Name"
              type="text"
              name="lastName"
              id="lastName"
              [(ngModel)]="user.lastName"
              #lastName="ngModel"
            >
          </md-input-container>
        </div>

        <div class="row">
          <md-input-container class="col-xs-12 col-lg-6" >
            <input md-input placeholder="Phone Number"
              type="text"
              name="phone"
              id="phone"
              [(ngModel)]="user.phone"
              #phone="ngModel"
            >
          </md-input-container>        
          <md-input-container class="col-xs-12 col-lg-6" >
            <input md-input placeholder="Email"
              type="email"
              name="email"
              id="email"
              [(ngModel)]="user.email"
              #email="ngModel"
              >
          </md-input-container>
        </div>

        <div class="row">
          <md-input-container class="col-xs-12 col-lg-6" >
            <input md-input placeholder="Password"
              type="password"
              name="password"
              id="password"
              [(ngModel)]="user.password"
              #password="ngModel"
            >
          </md-input-container>        
          <md-input-container class="col-xs-12 col-lg-6" >
            <input md-input placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              [(ngModel)]="user.confirmPassword"
              #confirmPassword="ngModel"
            >
          </md-input-container>
        </div>
        <div class="row middle-xs">
            <div class="end-xs col-xs-12 col-lg-6 ">
              <button type="submit" md-raised-button color="primary">Submit</button>
            </div>
            <div class="start-xs col-xs-12 col-lg-6">
              <a (click)="redirectToLogin()" class="btn-light link">
                Already have an account?
              </a>
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
    phone: '',
    password: '',
    email: '',
    confirmPassword: ''
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
      var error = { Id: 'middleName', Text: 'Please enter Middle Name'}
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
    if(this.user.phone == '') {
      var error = { Id: 'phone', Text: 'Please enter valid mobile'}
      this.errors.push(error);
    }
    if(this.user.password == '') {
      var error = { Id: 'password', Text: 'Please enter password'}
      this.errors.push(error);
    }
    if(this.user.confirmPassword == '' || this.user.password != this.user.confirmPassword) {
      var error = { Id: 'confirmPassword', Text: 'Please enter valid confirm Password'}
      this.errors.push(error);
    }
  }

}
