import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
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
    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit() {
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
            // success
        } else {
            // fail
        }
        this.router.navigateByUrl('home');
    }
}
