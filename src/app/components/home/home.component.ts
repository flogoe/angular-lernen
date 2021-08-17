import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loggedInUser = ''
  subscriptions = new Array<Subscription>();

  constructor(private readonly loginService: LoginService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.loginService.$loggedInUser.subscribe(($loggedInUser) => {
        this.loggedInUser = $loggedInUser;
      })
    );
  }
}
