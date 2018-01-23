import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user/user.service';

@Injectable()
export class AuthService {

    constructor(private router: Router, private userService: UserService) { }
    // need to change to Token

    isLoggedIn(): boolean {
        console.log(this.userService.currentUser);
        if (this.userService.currentUser.userAccount !== '' && this.userService.currentUser.userAccount !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    doLogin(account: string, password: string): boolean {
        for (const i of this.userService.userList) {
            if (account === i.userAccount && password === i.userPassword) {
                this.userService.setCurrentUser(i);
                return true;
            }
        }
        return false;
    }
    doLogout() {
        this.userService.clearCurrentUser();
    }
    getCurrentUser() {
        return this.userService.currentUser;
    }
}
