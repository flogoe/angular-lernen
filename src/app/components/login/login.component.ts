import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  @Output('usernameOutput') usernameOutput = new EventEmitter<string>();

  users = [];
  username = '';
  password = '';
  newUsername = '';
  newPassword = '';
  isLoggedIn = false;
  isSignUp = false;
  panicText = 'Hier nicht mit der Maus drüber fahren!!!';

  subscriptions = new Array<Subscription>();

  // "Dependency Injection" bzw. genauer "Contstructor Injection"
  constructor(private readonly loginService: LoginService) {}

  // Life-Cycle Hooks von Angular
  ngOnInit(): void {
    // "Registrieren" der Subscriptions
    this.subscriptions.push(
      this.loginService.$isLoggedIn.subscribe((status) => {
        this.isLoggedIn = status;
      })
    );
  }

  // Wird nach dem Rendern aufgerufen
  // ngAfterViewInit(): {
  // }

  // Beim "Zerstören" der Komponente wird ngOnDestroy() aufgerufen
  ngOnDestroy(): void {
    // Für jede vorher registrierte Subscription rufen wir nun unsubscribe() auf.
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
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
