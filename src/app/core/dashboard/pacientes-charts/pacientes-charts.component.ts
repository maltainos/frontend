import { HomeService } from './../../../service/home.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes-charts',
  templateUrl: './pacientes-charts.component.html',
  styleUrls: ['./pacientes-charts.component.css']
})
export class PacientesChartsComponent implements OnInit {

    public basicData : any;
    public basicOptions : any;

    public totalEndpoints = new Map();

    constructor(private homeService : HomeService) { }

    ngOnInit(): void {
        this.buildBarChartEndpoints();
    }


    private buildBarChartEndpoints(){

        this.homeService.getPacientes().subscribe(
            (endpoints : any) => {
                this.totalEndpoints = endpoints;
                this.basicData = {
                    labels : Object.keys(this.totalEndpoints),
                    datasets : [
                        {
                            label : ['Pacientes'],
                            backgroundColor : ['#2dbd32', '#2d5dbd', '#e35c0e', '#f01405','#42A5F5', '#0ee8e1', '#e8da0e'],
                            data : Object.values(this.totalEndpoints)
                        }
                    ]
                }
            },(error : HttpErrorResponse) => {
                console.log(error);
            }
        );
    }

}
