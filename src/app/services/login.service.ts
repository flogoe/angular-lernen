import { BehaviorSubject, Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // $: hat keine Funktion, ist eine Namingkonvention und nennt sich "finish notation"
  $isLoggedIn = new BehaviorSubject<boolean>(false); // hat default Wert
  $alternativeIsLoggedIn = new Subject<boolean>(); // hat keinen default Wert -> erstmal undefined

  userDB = [{ username: 'max', password: '12345' }];

  constructor() {}

  login(username: string, password: string) {
    for (let user of this.userDB) {
      if (user.username === username && user.password === password) {
        this.$isLoggedIn.next(true);
      } else {
        this.$isLoggedIn.next(false);
        console.log('Falscher Nutzername oder Passwort!');
      }
    }
  }
}
