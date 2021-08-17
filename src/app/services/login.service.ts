import { BehaviorSubject, Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // $: hat keine Funktion, ist eine Namingkonvention und nennt sich "finish notation"
  $isLoggedIn = new BehaviorSubject<boolean>(false); // hat default Wert
  $alternativeIsLoggedIn = new Subject<boolean>(); // hat keinen default Wert -> erstmal undefined
  $loggedInUser = new BehaviorSubject<string>('');

  constructor() { }

  login(userDB, username: string, password: string) {
    for (let user of userDB) {
      switch (user.username) {
        case (username):
          if (user.password === password) {
            this.$isLoggedIn.next(true);
            this.$loggedInUser.next(user.username)
            console.log(this.$loggedInUser)
          } else {
            console.log('Falscher Nutzername oder Passwort!');
          }
          break;
      }
    }
  }

  logout() {
    this.$isLoggedIn.next(false);
  }
}
