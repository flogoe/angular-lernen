import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userDB = []
  newUsername = '';
  newPassword = '';

  subscriptions = new Array<Subscription>();

  constructor(private readonly signupService: SignupService,
    private readonly loginService: LoginService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.signupService.$userDB.subscribe(($userDB) => {
        this.userDB = $userDB;
      })
    );
  }

  addUser() {
    this.signupService.addUser({username: this.newUsername, password: this.newPassword})
  }
}
