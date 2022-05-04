import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

import { AuthConfigService } from './auth-config.service';
import { SystemCpu } from './../interface/system-cpu.model';
import { HttpTrace } from './../interface/http-trace.model';
import { SystemHealth } from './../interface/system-health.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    systemUrl = `${environment.BASE_URL}/actuator`;

    constructor(
        private http : HttpClient,
        private authConfig : AuthConfigService
    ) { }

    public getHttTraces() : Observable<HttpTrace>{

        const headers = this.authConfig.createAuthorizationHeaders();

        return this.http.get<HttpTrace>(`${this.systemUrl}/httptrace`, { 'headers' : headers });
    }

    public getSystemHealth() : Observable<SystemHealth>{

        const headers = this.authConfig.createAuthorizationHeaders();

        return this.http.get<any>(`${this.systemUrl}/health`, { 'headers' : headers });
    }

    public getSystemCpu() : Observable<any>{

        const headers = this.authConfig.createAuthorizationHeaders();

        return this.http.get<SystemCpu>(`${this.systemUrl}/metrics/system.cpu.count`, { 'headers' : headers });
    }

    public getProcessUpTime() : Observable<any>{

        const headers = this.authConfig.createAuthorizationHeaders();

        return this.http.get<any>(`${this.systemUrl}/metrics/process.uptime`, { 'headers' : headers });
    }
}
