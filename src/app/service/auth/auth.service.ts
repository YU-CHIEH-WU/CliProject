import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user/user.service';
import { MaterializeService } from '../../shared/materialize.service';

@Injectable()
export class AuthService {
    materialize: any;
    constructor(private router: Router, private userService: UserService, private _materialize: MaterializeService) { }
    // need to change to Token
    isLoggedIn(): boolean {
        if (this.userService.currentUser.userAccount !== '' && this.userService.currentUser.userAccount !== undefined) {
            return true;
        } else {
            this.materialize = this._materialize.getMaterialize();
            this.materialize.toast('You are not Login!', 3000);
            return false;
        }
    }

    doLogin(account: string, password: string) {
        for (const i of this.userService.userList) {
            if (account === i.userAccount) {
                if (password === i.userPassword) {
                    this.userService.setCurrentUser(i);
                    return { status: true, message: 'login success!' };
                } else {
                    return { status: false, message: 'wrong password!' };
                }
            }
        }
        return { status: false, message: 'doesn\'t match any account!' };
    }
    doLogout() {
        this.userService.clearCurrentUser();
    }
    getCurrentUser() {
        return this.userService.currentUser;
    }
}
