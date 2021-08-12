import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output('usernameOutput') usernameOutput = new EventEmitter<string>();

  users = []
  username = '';
  password = '';
  newUsername = '';
  newPassword = '';
  isLoggedIn = false;
  isSignUp = false;
  panicText = 'Hier nicht mit der Maus drüber fahren!!!';

  constructor() { }

  ngOnInit(): void { }

  login() {
    if (this.users.length) {
      for (let user of this.users) {
        if (this.username === user.username && this.password === user.password) {
          this.isLoggedIn = true;
          this.usernameOutput.emit('this.username')
        } else {
          console.log('Falscher Nutzername oder Passwort.');
        }
      }
    } else {
      console.log('Falscher Nutzername oder Passwort.');
    }
  }

  signUp() {
    this.isSignUp = true
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
    this.isSignUp = false
  }

  addUser() {
    this.users.push({ username: this.newUsername, password: this.newPassword })
    console.log(this.users)
    this.cancelSignUp()
  }
}
