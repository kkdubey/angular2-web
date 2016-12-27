import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'register-container',
  styleUrls: [`app/containers/Register/register.style.css`],
  templateUrl: `app/containers/Register/register.tpl.html`
})
export class Register {
  user = {
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBorth: '',
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
    this.router.navigate(['login']);
  }

  registerUser() {
    this.validateForm();
    if(this.errors.length == 0) {
      this.auth.authenticate("register", this.user)
      .subscribe(() => this.router.navigate(['']));
    }
  }


  validateForm() {
    this.errors = [];
    if(this.user.firstName == '') {
      var error = { Id: 'firstName', Text: 'Please enter First Name'}
      this.errors.push(error);
    }
    if(this.user.middleName == '') {
      var error = { Id: 'middleName', Text: 'Please enter Middle Name'}
      this.errors.push(error);
    }
    if(this.user.lastName == '') {
      var error = { Id: 'lastName', Text: 'Please enter Last Name'}
      this.errors.push(error);
    }
    if(this.user.email == '') {
      var error = { Id: 'dateOfBorth', Text: 'Please enter Date Of Borth'}
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
