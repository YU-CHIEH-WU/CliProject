import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MaterializeService } from '../../../service/shared/materialize/materialize.service';

@Injectable()
export class UserService {
    currentUser: User = new User();
    userList = [
        {
            'userAccount': 'test',
            'userPassword': '0000',
            'userName': '測試者',
            'photoUrl': 'https://i.imgur.com/1ecu3ep.png',
            'isAdmin': false
        }, {
            'userAccount': 'admin',
            'userPassword': '000000',
            'userName': '管理者',
            'photoUrl': 'https://i.imgur.com/NSa8FPo.jpg',
            'isAdmin': true
        }, {
            'userAccount': 'jake.wu',
            'userPassword': '0000',
            'userName': '吳彧傑',
            'photoUrl': 'https://i.imgur.com/XZLglBB.jpg',
            'isAdmin': false
        }
    ];
    constructor(private _router: Router, private _materialize: MaterializeService) { }
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
        if (this.currentUser.userAccount !== '' && this.currentUser.userAccount !== undefined) {
            return true;
        } else {
            this._materialize.toast('You are not Login!', 1000, 'danger');
            return false;
        }
    }

    doLogin(account: string, password: string) {
        for (const i of this.userList) {
            if (account === i.userAccount) {
                if (password === i.userPassword) {
                    this.setCurrentUser(i);
                    return { status: true, message: 'login success!' };
                } else {
                    return { status: false, message: 'wrong password!' };
                }
            }
        }
        return { status: false, message: 'doesn\'t match any account!' };
    }
    doLogout() {
        this.currentUser = new User();
    }
    getCurrentUser() {
        return this.currentUser;
    }
    setCurrentUser(loginUser: User) {
        this.currentUser.userAccount = loginUser.userAccount;
        this.currentUser.userName = loginUser.userName;
        this.currentUser.photoUrl = loginUser.photoUrl;
        this.currentUser.isAdmin = loginUser.isAdmin;
    }
}
export class User {
    userAccount: string;
    userName: string;
    photoUrl: string;
    isAdmin: boolean;
}
