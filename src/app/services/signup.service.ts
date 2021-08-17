import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  $userDB = new BehaviorSubject<Array<any>>([]);

  constructor() { }

  addUser(user) {
    const currentValue = this.$userDB.value;
    const updatedValue = [...currentValue, user];
    this.$userDB.next(updatedValue);
  }
}
