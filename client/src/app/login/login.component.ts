import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ServiceManager } from '../shared/managers/service.manager';
import { UserService } from '../shared/services/user.service';

// FOR SHA256 ENCRYPTION.
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private serviceManager: ServiceManager,
    private userService: UserService
  ) { }

  // CHANGES VALUE WITH FUNCTIONS AND DETERMINES WHICH HTML IS DISPLAYED WITH (*ngIf).
  state = 'login';

  currentUser = this.userService.currentUser;

  // CHANGES VALUE BASED ON THE 'CURRENT USERS' STATUS AND IS DISPLAYED ON THE 'SHOPPING BUTTON'.
  shoppingStatus = 'Start Shopping';

  // THE LOGIN / REGISTRATION FORMS ARE COMPLICATED TRY AND KEEP UP ;)
  // PRESET VALIDATIONS FOR THE 'EMAIL' AND 'PASSWORD' FIELDS, USING THE formController() FUNCTION.
  formGroupConfig = {
    email: this.formController(3, 254, 'Email', /[a-zA-Z0-9]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-zA-Z]{1,}[.]?[a-zA-Z]{1,}/),
    password: this.formController(8, Infinity, 'Password'),
  };

  // THE FORM ITSELF
  form = new FormGroup(this.formGroupConfig);

  // FUNCTION WHICH TAKES IN PARAMETERS AND SETS VALIDATION REQUIRMENTS FOR EACH FIELD.
  // THE FORM VALIDATION IS THE SAME FOR ALL FIELDS BUT VALUES, LENGTH AND REGEX ARE UNIQUE OR OPTIONAL.
  // THIS IS POSSIBLE DUE TO THE SIMILAR VALIDATION REQUIRMENTS OF MOST FIELDS.
  formController(min, max, label, regex?) {
    return new FormControl('', [
      f => !f.value && f.pristine ? { error: '' } : null,
      f => !f.value && f.dirty ? { error: `${label} is required` } : null,
      f => f.value && f.value.length < min ? { error: `${label} is too short (min ${min} characters).` } : null,
      f => f.value && f.value.length > max ? { error: `${label} is too long (max ${max} characters).` } : null,
      f => f.value && !RegExp(regex).test(f.value) ? { error: `${f.value} is an invalid ${label}.` } : null,
    ]);
  }

  // THE 'CONFIRM PASSWORD' FIELD HAS DIFFERENT VALIDATION REQUIRMENTS AND HAS IT'S OWN VALIDATION FUNCTION.
  passwordController() {
    return new FormControl('', [
      f => !f.value && f.pristine ? { error: '' } : null,
      f => !f.value && f.dirty ? { error: 'Confirm Password is required' } : null,
      f => f.value && this.form.controls.password.value !== f.value ? { error: 'Passwords do not match' } : null
    ]);
  }

  // CHANGES THE 'state' VARIABLE TO DETERMINE WHICH HTML GET'S DISPLAYED WITH (*ngIf) -
  // - AND WHICH FIELDS TO ADD OR REMOVE FROM THE FORM (SINCE THE REGISTRATION / LOGIN USE THE SAME FORM!).
  changeState(state?) {

    if (this.state === 'login') {

      this.state = 'next';

      this.form.addControl('firstName', this.formController(3, 15, 'First Name', /^[ ]{0,}[a-zA-Z]*[ ]{0,}$/));
      this.form.addControl('lastName', this.formController(3, 15, 'Last Name', /^[ ]{0,}[a-zA-Z]*[ ]{0,}$/));
      this.form.addControl('confirmPassword', this.passwordController());
      this.form.addControl('israeliId', this.formController(9, 9, 'ID', /^[ ]{0,}[0-9]*[ ]{0,}$/));
      this.form.addControl('city', this.formController(3, 15, 'City', /^[a-zA-Z']*[ ]?[a-zA-Z']*$/));
      this.form.addControl('street', this.formController(3, 15, 'Street', /^[ ]{0,}[a-zA-Z]*[ ]{0,}$/));

      this.form.reset();

    } else if (state === 'login') {

      this.state = 'login';

      this.form.removeControl('firstName');
      this.form.removeControl('lastName');
      this.form.removeControl('confirmPassword');
      this.form.removeControl('israeliId');
      this.form.removeControl('city');
      this.form.removeControl('street');

      this.form.reset();

    } else {

      state === 'register' ? this.state = 'register' : this.state = 'next';

    }

  }

  // CHECKS IF THE 1ST PART OF THE REGISTRATION FOR IS VALID IN ORDER TO ENABLE / DISABLE -
  // - THE 'NEXT' BUTTON WHICH LEADS TO THE 2ND PART OF REGISTRATION.
  next() {

    if (
      this.form.controls.firstName.status === 'VALID' &&
      this.form.controls.lastName.status === 'VALID' &&
      this.form.controls.email.status === 'VALID' &&
      this.form.controls.password.status === 'VALID' &&
      this.form.controls.confirmPassword.status === 'VALID') {

      return false;

    }

    return true;

  }

  // CALLS THE REGISTRATION / LOGIN FUNCTIONS WITH THE FORM VALUES BASED ON THE 'state' VARIABLE.
  sendForm() {

    this.state === 'register' ? this.registerUser() : this.loginUser();

  }

  // CALLS THE 'userService' REGISTER FUNCTION, WITH FORM VALUES.
  // RESETS THE FORM
  registerUser() {

    this.userService.registerUser(

      {
        firstName: this.form.value.firstName.trim().toLowerCase(),
        lastName: this.form.value.lastName.trim().toLowerCase(),
        email: this.form.value.email.trim().toLowerCase(),
        password: crypto.SHA256(this.form.value.password).toString(),
        israeliId: this.form.value.israeliId.trim(),
        city: this.form.value.city.trim().toLowerCase(),
        street: this.form.value.street.trim().toLowerCase()
      }

    );

    this.form.reset();

  }

  // CALLS THE 'userService' LOGIN FUNCTION, WITH FORM VALUES.
  // RESETS THE FORM
  loginUser() {

    this.userService.loginUser(

      {
        email: this.form.value.email.trim().toLowerCase(),
        password: crypto.SHA256(this.form.value.password).toString()
      }

    );

    this.form.reset();

  }

  ngOnInit() {

    // LOADS DATA FROM DB (CATEGORIES, PRODUCTS, ORDERS).
    this.serviceManager.loadData();

    // CHANGES THE 'state' VARIABLE ON INIT TO DEAL WITH UNDEFINED VALUES.
    // STARTS AS 'login' BUT CHANGES BEFORE YOU SEE IT TO 'register'.
    this.changeState();

    this.userService.isLoggedIn();

  }

}
