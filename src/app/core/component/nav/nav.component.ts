import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterializeService } from '../../../service/shared/materialize/materialize.service';
import { UserService } from '../../../service/core/user/user.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    collapsible: any;
    clickedTab: string;
    loginAccount: string;
    loginPassword: string;
    isLoggedIn = false;
    error = { isAccountValid: true, isPasswordValid: true };
    currentUser = this._userService.getCurrentUser();
    userMenu: any;
    constructor(private _router: Router, private _userService: UserService,
        private _materialize: MaterializeService) { }

    ngOnInit() {
        this.loginAccount = 'admin';
        this.loginPassword = '000000';
        this.isLoggedIn = this._userService.isLoggedIn();
        this._router.events.subscribe((res) => {
            this.clickedTab = this._router.url;
        });
        this.userMenu = this._materialize.collapsible('.user-menu');
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
        if (this.loginAccount === '' && this.loginPassword === '') {
            this.error.isAccountValid = false;
            this.error.isPasswordValid = false;
            return false;
        }
        if (this.error.isAccountValid && this.error.isPasswordValid) {
            const result = this._userService.doLogin(this.loginAccount, this.loginPassword);
            if (result.status) {
                this.currentUser = this._userService.getCurrentUser();
                this.isLoggedIn = true;
                console.log(result.message);
                this._materialize.toast(result.message, 3000);
            } else {
                this._materialize.toast(result.message, 3000, 'danger');
            }
            this._router.navigateByUrl('home');
        }
    }
    doLogout() {
        this._userService.doLogout();
        this.loginAccount = '';
        this.loginPassword = '';
        this.isLoggedIn = false;
        this._router.navigateByUrl('home');
        this._materialize.closeCollapsible(this.userMenu);
    }
}
