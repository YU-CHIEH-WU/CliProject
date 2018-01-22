import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user/user.service';

@Injectable()
export class AuthService {

    constructor(private router: Router, private userService: UserService) { }
    // need to change to Token

    currentUser = this.userService.User;
    isLoggedIn(): boolean {
        if (this.currentUser !== undefined) {
            if (this.currentUser.userAccount !== '') {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    doLogin(account: string, password: string): boolean {
        const userList = this.userService.getUserList();
        for (const i of userList) {
            if (account === i.userAccount && password === i.userPassword) {
                this.currentUser.userAccount = i.userAccount;
                this.currentUser.userName = i.userName;
                this.currentUser.photoUrl = i.photoUrl;
                this.currentUser.isAdmin = i.isAdmin;
                return true;
            }
        }
        return false;
    }
}
