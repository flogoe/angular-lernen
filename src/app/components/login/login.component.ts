import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  isLoggedIn = false;
  panicText = 'Hier nicht mit der Maus drüber fahren!!!';

  constructor() {}

  ngOnInit(): void {}

  login() {
    if (this.username === 'max' && this.password === '123') {
      this.isLoggedIn = true;
    } else {
      console.log('Falscher Nutzername oder Passwort.');
    }
  }

  logout() {
    this.isLoggedIn = false;
  }

  printChange() {
    console.log(this.username);
  }

  panic() {
    this.panicText = 'Wie konntest du nur???';
  }

  stopPanic() {
    this.panicText = 'Calm';
  }
}
