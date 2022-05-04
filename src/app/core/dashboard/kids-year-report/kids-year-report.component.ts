import { KidService } from './../../../service/kid.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-kids-year-report',
  templateUrl: './kids-year-report.component.html',
  styleUrls: ['./kids-year-report.component.css']
})
export class KidsYearReportComponent implements OnInit {

    public basicData : any;
    public basicOptions : any;

    //public totalKids = new Map();


    constructor(private kidService : KidService) { }

    ngOnInit(): void {
        this.buildBarChartEndpoints();
    }


    private buildBarChartEndpoints(){

        this.kidService.getYearReport().subscribe(
            (returnValue : any) => {
                this.basicData = {
                    labels : returnValue[0].monthName,
                    datasets : [
                        {
                            label : returnValue[0].year,
                            backgroundColor : ['#2d5dbd'],
                            data : returnValue[0].monthData
                        },
                        {
                            label : returnValue[1].year,
                            backgroundColor : ['#2dbd32'],
                            data : returnValue[1].monthData
                        }
                    ]
                }
            },(error : HttpErrorResponse) => {
                console.log(error);
            }
        );
    }


}
