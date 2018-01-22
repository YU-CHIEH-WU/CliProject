import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    clickedTab: string;
    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((res) => {
            this.clickedTab = this.router.url;
            console.log(this.clickedTab);
        });
    }
    clickTab(clickedTab) {
        this.clickedTab = clickedTab;
        console.log(this.clickedTab);
    }
}
