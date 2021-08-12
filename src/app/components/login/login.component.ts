import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output('usernameOutput') usernameOutput = new EventEmitter<string>();

  users = [];
  username = '';
  password = '';
  newUsername = '';
  newPassword = '';
  isLoggedIn = false;
  isSignUp = false;
  panicText = 'Hier nicht mit der Maus drüber fahren!!!';

  // "Dependency Injection" bzw. genauer "Contstructor Injection"
  constructor(private readonly loginService: LoginService) {}

  // Life-Cycle Hooks von Angular
  ngOnInit(): void {
    this.loginService.$isLoggedIn.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  login() {
    this.loginService.login(this.username, this.password);
  }

  signUp() {
    this.isSignUp = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  panic() {
    this.panicText = 'Wie konntest du nur???';
  }

  stopPanic() {
    this.panicText = 'Calm';
  }

  cancelSignUp() {
    this.isSignUp = false;
  }

  addUser() {
    this.users.push({ username: this.newUsername, password: this.newPassword });
    console.log(this.users);
    this.cancelSignUp();
  }
}
