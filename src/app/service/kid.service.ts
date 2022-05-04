import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthConfigService } from './auth-config.service';

const baseUrl = `${environment.BASE_URL}/recem-nascidos`;

@Injectable({
  providedIn: 'root'
})
export class KidService {

    constructor(private http : HttpClient, private authConfig : AuthConfigService) { }

    public getYearReport() : Observable<any>{
        const headers = this.authConfig.createAuthorizationHeaders();
        return  this.http.get<any>(`${baseUrl}/report/year`,{ 'headers': headers });
    }

    public getMonthReport() : Observable<any>{
        const headers = this.authConfig.createAuthorizationHeaders();
        return this.http.get<any>(`${baseUrl}/report/month`, { 'headers' : headers });
    }

    public getWeekReport() : Observable<any>{
        const headers = this.authConfig.createAuthorizationHeaders();
        return this.http.get<any>(`${baseUrl}/report/week`, { 'headers' : headers });
    }
}
