import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {


    doLogin() {
        localStorage.setItem('currentUser', 'ramu')
    }

}