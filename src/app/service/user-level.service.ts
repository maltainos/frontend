import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { UserLevel } from './../interface/user-level.model';
import { AuthConfigService } from './auth-config.service';

@Injectable({
    providedIn: 'root'
})
export class UserLevelService{

    userLevelUrl = `${environment.BASE_URL}/access-level`;

    constructor(
        private http : HttpClient,
        private authServiceConfig : AuthConfigService
        ){

    }

    listar() : Observable<UserLevel[]>{

        let headers = this.authServiceConfig.createAuthorizationHeaders();

        return this.http.request<UserLevel[]>('GET', this.userLevelUrl, { headers });
    }

    salvar(userLevel : UserLevel) : Observable<any>{

        let headers = this.authServiceConfig.createAuthorizationHeaders();

        return this.http.post<any>(this.userLevelUrl, userLevel, { headers });
    }

}
