import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserDataService } from './user-data.service';
import { MaterializeService } from '../../../shared/service/materialize/materialize.service';

@Injectable()
export class UserAuthService {
  constructor(private _router: Router, private _userDataService: UserDataService, private _materialize: MaterializeService) { }
  // auth guard for routing
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggedIn()) {
      return true;
    } else {
      this._router.navigateByUrl('home');
    }
  }

  // need to change to Token
  isLoggedIn(): boolean {
    if (this._userDataService.currentUser.userAccount !== '' && this._userDataService.currentUser.userAccount !== undefined) {
      return true;
    } else {
      this._materialize.toast('You are not Login!', 3000);
      return false;
    }
  }

  doLogin(account: string, password: string) {
    for (const i of this._userDataService.userList) {
      if (account === i.userAccount) {
        if (password === i.userPassword) {
          this._userDataService.setCurrentUser(i);
          return { status: true, message: 'login success!' };
        } else {
          return { status: false, message: 'wrong password!' };
        }
      }
    }
    return { status: false, message: 'doesn\'t match any account!' };
  }
  doLogout() {
    this._userDataService.clearCurrentUser();
  }
  getCurrentUser() {
    return this._userDataService.currentUser;
  }
}
