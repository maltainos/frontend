import { Gravidez } from 'src/app/interface/gravidez.model';
import { HttpClient } from '@angular/common/http';
import { AuthConfigService } from './auth-config.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const pregnancyUrl = `${environment.BASE_URL}/gravidezes`;

@Injectable({
  providedIn: 'root'
})
export class PregnancyService {

    constructor(private authConfigService : AuthConfigService, private http : HttpClient) { }

    public getGravidezes() : Observable<Gravidez[]>{

        const headers = this.authConfigService.createAuthorizationHeaders();

        return this.http.get<Gravidez[]>(`${pregnancyUrl}`, { 'headers' : headers });
    }

    public getGravidez(gravidezId : string) : Observable<Gravidez>{

        const headers = this.authConfigService.createAuthorizationHeaders();

        return this.http.get<Gravidez>(`${pregnancyUrl}/${gravidezId}`, { 'headers' : headers });
    }
}
