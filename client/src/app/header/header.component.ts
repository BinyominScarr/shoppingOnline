import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  // FOR DISPLAY IN HEADER
  currentUser = this.userService.currentUser;

  // CALLS A LOGOUT FUNCTION WHIC RESETS ALL USER DATA.
  logout() {

    this.userService.logout();

  }

  // CHECKS IF USER IS LOGGED IN, TO BE ABLE TO RETRIEVE THE CURRENT USER.
  ngOnInit() {

    this.userService.isLoggedIn();

  }

}
