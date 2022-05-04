import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { User } from './../interface/user.model';
import { UserLevel } from 'src/app/interface/user-level.model';
import { AuthConfigService } from './../service/auth-config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    userUrl = `${environment.BASE_URL}/users`;
    token : any;
    constructor(
            private http : HttpClient,
            private router : Router,
            private authServiceConfig : AuthConfigService
        ) {}

    listagrupo(){

    }

    private loadToken() {
        const token = localStorage.getItem('sigsmiToken');
        if(token){
            this.token = token;
        }else{
            this.router.navigate(['/login']);
        }
    }

    listar() : Observable<User[]>{

        let headers = this.authServiceConfig.createAuthorizationHeaders();

        return this.http.get<User[]>(`${this.userUrl}`, { 'headers' : headers });

    }

    getUser(userId : string) : Observable<User>{

        const headers = this.authServiceConfig.createAuthorizationHeaders();

        return this.http.get<User>(`${this.userUrl}/${userId}`,  { 'headers' : headers});

    }

    exportPDF(){
        let headers = this.authServiceConfig.createAuthorizationHeaders();

        return this.http.get<User[]>(`${this.userUrl}/export/pdf`, { 'headers' : headers});
    }

    exportCSV(){
        let headers = this.authServiceConfig.createAuthorizationHeaders();

        return this.http.get<User[]>(`${this.userUrl}/export/csv`, { 'headers' : headers});
    }

    exportEXCEL(){
        let headers = this.authServiceConfig.createAuthorizationHeaders();

        return this.http.get<User[]>(`${this.userUrl}/export/excel`, { 'headers' : headers});
    }

    salvar(user : User) : Observable<User>{
        let headers = this.authServiceConfig.createAuthorizationHeaders();

        return this.http.post<User>(`${this.userUrl}`, user, { 'headers' : headers});
    }

    excluir(userId : string) : Observable<void>{

        let headers = this.authServiceConfig.createAuthorizationHeaders();

        return this.http.delete<void>(`${this.userUrl}/${userId}`, { 'headers' : headers});
    }

    grantAuthority(roles : UserLevel[], userId : string) : Observable<any>{
        const auths : string [] = [];

        roles.forEach((auth) => {
            auths.push(auth.levelId);
        });

        const authority = {
            authorities  : auths
        }

        let headers = this.authServiceConfig.createAuthorizationHeaders();

        return this.http.post<any>(`${this.userUrl}/${userId}/grant-access`, authority, { 'headers' : headers});

    }
}
