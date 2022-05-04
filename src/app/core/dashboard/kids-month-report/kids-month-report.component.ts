import { HttpErrorResponse } from '@angular/common/http';
import { KidService } from './../../../service/kid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids-month-report',
  templateUrl: './kids-month-report.component.html',
  styleUrls: ['./kids-month-report.component.css']
})
export class KidsMonthReportComponent implements OnInit {

    public kidBarChar : any;
    public kidPieChar : any;
    public kidBarOptions : any;

    constructor(private kidService : KidService) { }

    ngOnInit(): void {
        this.buildKidsBarChart();
        this.buildKidsPieChart();
    }

    public buildKidsBarChart(){
        this.kidService.getMonthReport().subscribe(
            (returnValue) => {
                this.kidBarChar = {
                    labels : returnValue.day,
                    datasets : [
                        {
                            label : returnValue.monthName,
                            backgroundColor : ['#2dbd32', '#2d5dbd', '#e35c0e', '#f01405','#42A5F5', '#0ee8e1', '#e8da0e','#2dbd32', '#2d5dbd', '#e35c0e', '#f01405','#42A5F5', '#0ee8e1', '#e8da0e','#2dbd32', '#2d5dbd', '#e35c0e', '#f01405','#42A5F5', '#0ee8e1', '#e8da0e','#2dbd32', '#2d5dbd', '#e35c0e', '#f01405','#42A5F5', '#0ee8e1', '#e8da0e','#e8da0e','#2dbd32', '#2d5dbd'],
                            data : returnValue.dailyData
                        }
                    ]
                }
            },(error : HttpErrorResponse) =>{
                console.log(error);
            }
        );
    }

    public buildKidsPieChart(){
        this.kidService.getMonthReport().subscribe(
            (returnValue) => {
                this.kidPieChar = {
                    labels : returnValue.day,
                    datasets : [
                        {
                            label : returnValue.monthName,
                            backgroundColor : ['#2dbd32', '#2d5dbd', '#e35c0e', '#f01405','#42A5F5', '#0ee8e1', '#e8da0e','#2dbd32', '#2d5dbd', '#e35c0e', '#f01405','#42A5F5', '#0ee8e1', '#e8da0e','#2dbd32', '#2d5dbd', '#e35c0e', '#f01405','#42A5F5', '#0ee8e1', '#e8da0e','#2dbd32', '#2d5dbd', '#e35c0e', '#f01405','#42A5F5', '#0ee8e1', '#e8da0e','#e8da0e','#2dbd32', '#2d5dbd'],
                            data : returnValue.dailyData
                        }
                    ]
                }
            },(error : HttpErrorResponse) =>{
                console.log(error);
            }
        );
    }
}
