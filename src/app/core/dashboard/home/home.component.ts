import { HomeService } from './../../../service/home.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { HttpTrace } from './../../../interface/http-trace.model';
import { DashboardService } from './../../../service/dashboard.service';

import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(

    ){}

    ngOnInit(): void {

    }

}

