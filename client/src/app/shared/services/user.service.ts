import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  url = 'http://localhost:8200/shopping/api/users';

  currentUser = {
    id: undefined,
    name: 'guest',
    city: undefined,
    street: undefined,
    loggedIn: false,
    role: undefined
  };

  isLoggedIn() {

    if (localStorage.getItem('token') && jwt.verify(localStorage['token'], 'secret').user.role === 'admin') {

      this.router.navigate(['/administration']);

      this.currentUser.role = jwt.verify(localStorage['token'], 'secret').user.role;
      this.currentUser.name = jwt.verify(localStorage['token'], 'secret').user.firstName;
      this.currentUser.loggedIn = true;

      return true;

    } else if (localStorage.getItem('token') && jwt.verify(localStorage['token'], 'secret').isLoggedIn === true) {

      this.currentUser.id = jwt.verify(localStorage['token'], 'secret').user._id;
      this.currentUser.name = jwt.verify(localStorage['token'], 'secret').user.firstName;
      this.currentUser.city = jwt.verify(localStorage['token'], 'secret').user.city;
      this.currentUser.street = jwt.verify(localStorage['token'], 'secret').user.street;
      this.currentUser.loggedIn = true;

      return true;

    }

    return false;

  }

  registerUser(registerData: User): void {

    this.http.post(this.url, registerData, { observe: 'response' })

      .subscribe((res: any) => {

        if (res.body.status === 'register success') {

          localStorage.setItem('token', res.headers.get('xx-auth'));

          this.isLoggedIn();

        }

      });

  }

  loginUser(loginData: User): void {

    this.http.get(this.url, { headers: { 'xx-auth': `${loginData.password}${loginData.email}` }, observe: 'response' })

      .subscribe((res: any) => {

        if (res.body.status === 'login success') {

          localStorage.setItem('token', res.headers.get('xx-auth'));

          this.isLoggedIn();

        }

      });

  }

  logout() {

    localStorage.removeItem('token');

    this.currentUser.role = undefined;
    this.currentUser.id = undefined;
    this.currentUser.name = 'guest';
    this.currentUser.loggedIn = false;

  }

}
