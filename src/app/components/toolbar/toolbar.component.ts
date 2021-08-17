import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})

export class ToolbarComponent implements OnInit {
  username = '';
  password = '';
  isLoggedIn = false
  userDB

  subscriptions = new Array<Subscription>();

  constructor(private readonly loginService: LoginService,
    private readonly signupService: SignupService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.loginService.$isLoggedIn.subscribe((status) => {
        this.isLoggedIn = status;
      }),
      this.signupService.$userDB.subscribe(($userDB) => {
        this.userDB = $userDB;
      })
    );
  }

  login() {
    this.loginService.login(this.userDB, this.username, this.password);
  }

  logout() {
    this.loginService.logout()
  }
}
