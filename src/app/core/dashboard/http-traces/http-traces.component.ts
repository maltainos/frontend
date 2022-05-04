import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { DashboardService } from './../../../service/dashboard.service';
import { HttpTrace } from './../../../interface/http-trace.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-traces',
  templateUrl: './http-traces.component.html',
  styleUrls: ['./http-traces.component.css']
})
export class HttpTracesComponent implements OnInit {

    display = false;

    public traceList : any[] = [];
    public selectedTrace : any;
    public traces !: HttpTrace;
    public http200Traces : any[] = [];
    public http201Traces : any[] = [];
    public http202Traces : any[] = [];
    public http204Traces : any[] = [];
    public http400Traces : any[] = [];
    public http404Traces : any[] = [];
    public http406Traces : any[] = [];
    public http500Traces : any[] = [];
    public httpDefaultTraces : any[] = [];
    public basicData : any;
    public basicOptions : any;

    constructor(
        private dashboardService : DashboardService,
        private messageService : MessageService
    ) { }

    ngOnInit(): void {
        this.getHttpTraces();
    }

    public getHttpTraces() {
        this.dashboardService.getHttTraces().subscribe(
            (returnValue : HttpTrace) => {
                this.traces = returnValue;
                this.processTraces(returnValue.traces);
                this.buildBarChart();
            },(error : HttpErrorResponse) => {
                //this.showError("Erro ao processar servico remoto "+error);
            }
        );
    }

    private processTraces(traces : any) : void{
        this.traceList = traces.filter((trace : any) => {
            return !trace.request.uri.includes('actuator');
        });
        this.traceList.forEach(trace => {

            switch(trace.response.status){
                case 200:
                    this.http200Traces.push(trace);
                    break;
                case 201:
                    this.http201Traces.push(trace);
                    break;
                case 202:
                    this.http202Traces.push(trace);
                    break;
                case 204:
                    this.http204Traces.push(trace);
                    break;
                case 400:
                    this.http400Traces.push(trace);
                    break;
                case 404:
                    this.http404Traces.push(trace);
                    break;
                case 406:
                    this.http406Traces.push(trace);
                    break;
                case 500:
                    this.http500Traces.push(trace);
                    break;
                default:
                    this.httpDefaultTraces.push(trace);
            }
        });
    }

    showDialog(trace : any) {
        this.display = true;
    }

    private buildBarChart(){
        this.basicData = {
            labels : ["200", "201", "202", "204", "400", "404", "406", "500"],
            datasets : [
                {
                    label : ["Http Traces Chart"],
                    backgroundColor : ['#2dbd32', '#2d5dbd', '#42A5F5', '#0ee8e1', '#e35c0e', '#f01405', '#e8da0e', '#f01405'],
                    data : [this.http200Traces?.length, this.http201Traces?.length, this.http202Traces?.length, this.http204Traces?.length, this.http400Traces?.length, this.http404Traces?.length, this.http406Traces?.length, this.http500Traces?.length]
                }
            ]
        }
    }

    private showError(info : string) {
        this.messageService.add({key: 'error', severity:'error', summary: 'ERRO!', detail: info});
    }


}
