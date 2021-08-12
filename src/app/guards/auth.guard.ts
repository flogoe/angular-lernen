import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isLoggedIn = false;

  constructor(private readonly loginService: LoginService) {
    this.loginService.$isLoggedIn.subscribe((status) => {
      console.log('constructor', status);
      this.isLoggedIn = status;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('canActivate', this.isLoggedIn);
    return this.isLoggedIn;
  }
}
