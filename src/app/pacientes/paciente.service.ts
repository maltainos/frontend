import { Gravidez } from 'src/app/interface/gravidez.model';
import { AuthConfigService } from './../service/auth-config.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Paciente } from '../interface/paciente.model';

@Injectable({
  providedIn: 'root'
})

export class PacienteService {

    paciente_url = `${environment.BASE_URL}/pacientes`;

    constructor(
        private http : HttpClient,
        private authConfig : AuthConfigService
    ) {}

    public search() : Observable<Paciente[]>{
        const headers = this.authConfig.createAuthorizationHeaders();

        return this.http.get<Paciente[]>(this.paciente_url, { 'headers' : headers });
    }

    public findOne(pacienteId : string) : Observable<Paciente>{

        const headers = this.authConfig.createAuthorizationHeaders();
        const params = new HttpParams();
        params.append('pacienteId', pacienteId);

        return this.http.get<Paciente>(`${this.paciente_url}/${pacienteId}`, { 'headers' : headers, 'params' : params });
    }

    public salvar(paciente : Paciente) : Observable<Paciente>{

        const headers = this.authConfig.createAuthorizationHeaders();

        return this.http.post<Paciente>(`${this.paciente_url}`, paciente, { 'headers' : headers });
    }

    public listarGravidez(pacienteId : string) {
        const headers = this.authConfig.createAuthorizationHeaders();
        return this.http.get<Gravidez[]>(`${this.paciente_url}/${pacienteId}/gravidezes`, { 'headers' : headers });
    }

    public salvarGravidez(gravidez : Gravidez, pacienteId : string) : Observable<Gravidez>{
        const headers = this.authConfig.createAuthorizationHeaders();
        return this.http.post<Gravidez>(`${this.paciente_url}/${pacienteId}/gravidezes`, gravidez, { 'headers' : headers });
    }

    public getAddresses(pacienteId : string) : Observable<any>{
        const headers = this.authConfig.createAuthorizationHeaders();
        return this.http.get<any>(`${this.paciente_url}/${pacienteId}/enderecos`, { 'headers' : headers });
    }

}
