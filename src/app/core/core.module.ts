import { KidService } from './../service/kid.service';
import { HomeService } from './../service/home.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ChartModule } from 'primeng/chart';
import { PasswordModule } from 'primeng/password';
import { TabViewModule } from 'primeng/tabview';

import { MessageService } from 'primeng/api';

import { RoleService } from './../service/role.service';
import { AuthService } from './../security/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { UnauthorizeComponent } from './error/unauthorize/unauthorize.component';
import { FooterComponent } from './footer/footer.component';
import { UserLevelService } from '../service/user-level.service';
import { PacienteService } from '../pacientes/paciente.service';

import { AuthConfigService } from './../service/auth-config.service';
import { EndpointsChartsComponent } from './dashboard/endpoints-charts/endpoints-charts.component';
import { HttpTracesComponent } from './dashboard/http-traces/http-traces.component';
import { KidsChartsComponent } from './dashboard/kids-charts/kids-charts.component';
import { PacientesChartsComponent } from './dashboard/pacientes-charts/pacientes-charts.component';
import { ComparteComponent } from './dashboard/comparte/comparte.component';
import { GravidezChartsComponent } from './dashboard/gravidez-charts/gravidez-charts.component';
import { KidsYearReportComponent } from './dashboard/kids-year-report/kids-year-report.component';
import { KidsMonthReportComponent } from './dashboard/kids-month-report/kids-month-report.component';
import { KidsWeekReportComponent } from './dashboard/kids-week-report/kids-week-report.component';


@NgModule({
    declarations: [
        NavbarComponent,
        HomeComponent,
        NotFoundComponent,
        UnauthorizeComponent,
        FooterComponent,
        EndpointsChartsComponent,
        HttpTracesComponent,
        KidsChartsComponent,
        PacientesChartsComponent,
        ComparteComponent,
        GravidezChartsComponent,
        KidsYearReportComponent,
        KidsMonthReportComponent,
        KidsWeekReportComponent
    ],
    imports: [
        CommonModule,
        RouterModule,

        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,

        InputTextModule,
        CardModule,
        ButtonModule,
        ChipModule,
        PanelModule,
        TableModule ,
        BadgeModule,
        TooltipModule,
        DialogModule,
        ToastModule,
        MessageModule,
        MessagesModule,
        ChartModule,
        PasswordModule,
        TabViewModule
    ],
    exports: [
        NavbarComponent,
        HomeComponent,
        NotFoundComponent,
        UnauthorizeComponent,
        FooterComponent,
        KidsChartsComponent,
        HttpTracesComponent,
        ComparteComponent,
        PacientesChartsComponent,
        EndpointsChartsComponent,
        KidsYearReportComponent,
        KidsMonthReportComponent,
        KidsWeekReportComponent
    ],
    providers: [
        AuthService,
        MessageService,
        UserLevelService,
        RoleService,
        PacienteService,
        AuthConfigService,
        HomeService,
        KidService
    ]
})
export class CoreModule { }
