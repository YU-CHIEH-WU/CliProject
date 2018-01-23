import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { User } from '../../service/auth/user/user.service';
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
    doLogin() {
        if (this.authService.doLogin(this.loginAccount, this.loginPassword)) {
            this.currentUser = this.authService.getCurrentUser();
            this.isLoggedIn = true;
        } else {
            // fail
        }
        this.router.navigateByUrl('home');
    }
    doLogout() {
        this.authService.doLogout();
        this.loginAccount = '';
        this.loginPassword = '';
        this.isLoggedIn = false;
        this.router.navigateByUrl('home');
    }
}
