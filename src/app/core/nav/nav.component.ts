import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { User } from '../../service/auth/user/user.service';

declare var Materialize: any;

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    clickedTab: string;
    loginAccount: string;
    loginPassword: string;
    isLoggedIn = false;
    error = { isAccountValid: true, isPasswordValid: true };
    currentUser: User = this.authService.getCurrentUser();
    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit() {
        this.loginAccount = 'admin';
        this.loginPassword = '000000';
        this.isLoggedIn = this.authService.isLoggedIn();
        this.router.events.subscribe((res) => {
            this.clickedTab = this.router.url;
        });
    }
    clickTab(clickedTab) {
        this.clickedTab = clickedTab;
    }
    validInput(model: string) {
        if (this['login' + model] === '') {
            this.error['is' + model + 'Valid'] = false;
        } else {
            this.error['is' + model + 'Valid'] = true;
        }
    }
    doLogin() {
        if (this.error.isAccountValid && this.error.isPasswordValid) {
            const result = this.authService.doLogin(this.loginAccount, this.loginPassword);
            if (result.status) {
                this.currentUser = this.authService.getCurrentUser();
                this.isLoggedIn = true;
            }
            Materialize.toast(result.message, 3000);
            this.router.navigateByUrl('home');
        }
    }
    doLogout() {
        this.authService.doLogout();
        this.loginAccount = '';
        this.loginPassword = '';
        this.isLoggedIn = false;
        this.router.navigateByUrl('home');
        Materialize.toast('you are logout!', 3000);
    }
}
