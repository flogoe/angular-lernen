import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  @Output('usernameOutput') usernameOutput = new EventEmitter<string>();

  userDB = [];
  username = '';
  password = '';
  isLoggedIn = false;
  panicText = 'Hier nicht mit der Maus drüber fahren!!!';

  subscriptions = new Array<Subscription>();

  // "Dependency Injection" bzw. genauer "Contstructor Injection"
  constructor(private readonly loginService: LoginService,
    private readonly signupService: SignupService) { }

  // Life-Cycle Hooks von Angular
  ngOnInit(): void {
    // "Registrieren" der Subscriptions
    this.subscriptions.push(
      this.loginService.$isLoggedIn.subscribe((status) => {
        this.isLoggedIn = status;
      }),
      this.signupService.$userDB.subscribe(($userDB) => {
        this.userDB = $userDB;
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
    this.loginService.login(this.userDB, this.username, this.password);
  }

  logout() {
    this.loginService.logout()
  }

  panic() {
    this.panicText = 'Wie konntest du nur???';
  }

  stopPanic() {
    this.panicText = 'Calm';
  }
}
