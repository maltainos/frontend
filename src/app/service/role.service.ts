import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../interface/role.model';
import { AuthConfigService } from './auth-config.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

    userLevel = `${environment.BASE_URL}/roles`;

    constructor(private http : HttpClient,
        private authServiceConfig : AuthConfigService) { }

    listar() : Observable<Role[]>{

        let headers = this.authServiceConfig.createAuthorizationHeaders();

        return this.http.request<Role[]>('GET', this.userLevel, { headers });
    }
}
