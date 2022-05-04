import { AuthConfigService } from './../../service/auth-config.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { SystemCpu } from './../../interface/system-cpu.model';
import { DashboardService } from './../../service/dashboard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    display = false;
    exibindoNavbar = false;
    public systemCpu !: any;
    public systemHealth !: any;
    public processUpTime !: any;
    public timestamps !: number;
    public payLoad : any | null = null;

    constructor(
        private router : Router,
        private dashboardService : DashboardService,
        private messageService : MessageService,
        private authConfig : AuthConfigService
    ) {
        this.payLoad = this.authConfig.jwtPayLoad;
    }

    ngOnInit(): void {
        this.getSystemCpu();
        this.getSystemHealth();
        this.getTimeUp(true);

    }


    public getSystemHealth(){
        if(this.router.url !== '/login'){
            this.dashboardService.getSystemHealth().subscribe(
                (response : any) => {
                    this.systemHealth = response;
                    this.systemHealth.components.diskSpace.details.free = this.formatBytes(this.systemHealth.components.diskSpace.details.free);
                },(error : HttpErrorResponse) => {
                    //this.showError("Erro ao processar servico remoto "+error);
                }
            );
        }
    }

    public getSystemCpu(){
        if(this.router.url !== '/login'){
            this.dashboardService.getSystemCpu().subscribe(
                (returnValue : SystemCpu) => {
                    this.systemCpu = returnValue;
                },(error : HttpErrorResponse) => {
                    //this.showError("Erro ao processar servico remoto "+error);
                }
            );
        }
    }

    public getTimeUp(isUpdateTime : boolean){
        if(this.router.url !== '/login'){
            this.dashboardService.getProcessUpTime().subscribe(
                (returnValue : any) => {
                    this.timestamps = Math.round(returnValue.measurements[0].value);
                    this.processUpTime = this.formatUpTime(this.timestamps);

                    if(isUpdateTime)
                    this.upadteTime();
                },(error : HttpErrorResponse) => {
                    //this.showError("Erro ao processar servico remoto "+error);
                });
        }
    }

    public logOut(){
        this.authConfig.logOut();
    }


    private formatBytes(bytes : any ) : string{
        if(bytes == 0){
            return "0 Bytes";
        }

        const k = 1024;
        const dm = 2 < 0 ? 0 : 2;
        const size = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k , i)).toFixed(dm)) + ''+size[i];
    }

    private upadteTime() : void{
        setInterval(() => {
            this.processUpTime = this.formatUpTime(this.timestamps + 1);
            this.timestamps++;
        }, 1000);
    }

    private updateSystemStatus() : void{
        setInterval(() => {
            this.getSystemHealth();
            this.getSystemCpu();
        }, 1000);
    }

    private formatUpTime(timestamp : number){
        const hours = Math.floor(timestamp / 60 /60);
        const minutes = Math.floor(timestamp / 60) - (hours * 60);
        const seconds = timestamp % 60;

        return hours.toString().padStart(2, '0') + 'h'
        + minutes.toString().padStart(2, '0') + 'm'
        + seconds.toString().padStart(2, '0')+ 's';
    }

    private formatDate(date : Date){
        const dd = date.getDay();
        const mm = date.getMonth();
        const yy = date.getFullYear();

        if(dd < 10){
            const day = `0${dd}`;
        }

        if(mm < 10){
            const month = `0${mm}`;
        }
    }

    showError(info : string) {
        this.messageService.add({key: 'error', severity:'error', summary: 'ERRO!', detail: info});
    }

    showMenu(){
        this.exibindoNavbar = !this.exibindoNavbar;
    }

}
