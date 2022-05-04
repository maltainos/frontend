import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { UserLogin } from './../models/userLogin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    loginUrl = `${environment.BASE_URL}/users/login`;

    constructor(private http : HttpClient) { }

    public login(userLogin : UserLogin) : Observable<any>{

        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');

        return this.http.post(this.loginUrl, userLogin, { headers });
    }
}
