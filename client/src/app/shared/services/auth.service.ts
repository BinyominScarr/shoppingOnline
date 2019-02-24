import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';


@Injectable()
export class AuthService implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate() {

    if (localStorage.getItem('token') && this.userService.isLoggedIn()) {

      return true;

    }

    this.router.navigate(['/login']);

  }

}
