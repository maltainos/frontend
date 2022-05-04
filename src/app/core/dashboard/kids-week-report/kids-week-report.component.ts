import { HttpErrorResponse } from '@angular/common/http';
import { KidService } from './../../../service/kid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids-week-report',
  templateUrl: './kids-week-report.component.html',
  styleUrls: ['./kids-week-report.component.css']
})
export class KidsWeekReportComponent implements OnInit {

    public kidWeekReportChart : any;
    public kidWeekReportOptions : any;

    constructor(private kidService : KidService) { }

    ngOnInit(): void {
        this.buildWeekChart();
    }

    public buildWeekChart(){
        this.kidService.getWeekReport().subscribe(
            (returnValue : any) => {
                console.log(returnValue);
                this.kidWeekReportChart ={
                    labels : returnValue.dayOfWeeek,
                    datasets : [
                        {
                            label : 'Semana: '+returnValue.weekOfYear,
                            backgroundColor : ['#2dbd32', '#2d5dbd', '#e35c0e', '#f01405','#42A5F5', '#0ee8e1', '#e8da0e','#2dbd32', '#2d5dbd', '#e35c0e', '#f01405','#42A5F5', '#0ee8e1', '#e8da0e','#2dbd32', '#2d5dbd', '#e35c0e', '#f01405','#42A5F5', '#0ee8e1', '#e8da0e','#2dbd32', '#2d5dbd', '#e35c0e', '#f01405','#42A5F5', '#0ee8e1', '#e8da0e','#e8da0e','#2dbd32', '#2d5dbd'],
                            data : returnValue.countData
                        }
                    ]
                }
            },(error : HttpErrorResponse) => {
                console.log(error);
            }
        );
    }

}
