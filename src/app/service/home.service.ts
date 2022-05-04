import { Observable } from 'rxjs';
import { AuthConfigService } from './auth-config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const homeUrl = `${environment.BASE_URL}/dashboard`;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

    constructor(
        private http : HttpClient,
        private authConfig : AuthConfigService
    ) { }


    public getEndpoints() : Observable<any>{

        const headers : HttpHeaders = this.authConfig.createAuthorizationHeaders();

        return this.http.get<any>(`${homeUrl}/chart-endpoints`, { 'headers': headers});
    }

    public getKids() : Observable<any>{

        const headers : HttpHeaders = this.authConfig.createAuthorizationHeaders();

        return this.http.get<any>(`${homeUrl}/chart-kids`, { 'headers': headers});
    }

    public getPacientes() : Observable<any>{

        const headers : HttpHeaders = this.authConfig.createAuthorizationHeaders();

        return this.http.get<any>(`${homeUrl}/chart-patients`, { 'headers': headers});
    }
}
