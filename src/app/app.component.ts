import { Router } from '@angular/router';
import { Component, Output } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @Output() display = false;
    title = 'sigsmi';

    constructor(private router : Router){
    }

    showNavbarAndFooter() {
        return this.router.url !== '/login';
    }
}
