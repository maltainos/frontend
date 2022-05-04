import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthConfigService {

    token : any | null = null;
    jwtPayLoad! : Object;

    constructor(private router : Router) {
        this.loadToken();
    }

    public config(authorization : any){
        this.storeToken(authorization.access_token);
        this.router.navigate(['/home']);
    }

    private storeToken(token : string){
        this.token = token;
        this.jwtPayLoad = jwtHelper.decodeToken(token);
        localStorage.setItem('sigsmiToken', token);
    }

    private loadToken(){
        const token = localStorage.getItem('sigsmiToken');
        if(token){
            if(jwtHelper.isTokenExpired(token)){
                this.logOut();
            }else{
                this.storeToken(token);
            }
        }else{
            this.router.navigate(['/login']);
        }
    }

    public createAuthorizationHeaders() : HttpHeaders{

        const headers = new HttpHeaders()
        .set('Content-Type','application/json')
        .set('Accept', 'application/json')
        .set('Authorization', this.token);

        return headers;
    }

    public logOut(){
        localStorage.removeItem('sigsmiToken');
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}
