import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthConfigService } from './auth-config.service';

const consultaCpnUrl = `${environment.BASE_URL}/consultas-pre-natais`;

@Injectable({
  providedIn: 'root'
})
export class ConsultaCpnService {

    constructor(
        private http : HttpClient,
        private authConfigService : AuthConfigService) {}

    public listar() : Observable<any>{
        const headers = this.authConfigService.createAuthorizationHeaders();
        return this.http.get<any>(`${consultaCpnUrl}`, { 'headers' : headers });
    }
}
