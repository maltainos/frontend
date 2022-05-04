import { ConsultaCpnService } from './../service/consulta-cpn.service';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

import { ConsultaCpnComponent } from './consulta-cpn/consulta-cpn.component';

@NgModule({
  declarations: [
      ConsultaCpnComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    CalendarModule,
    MenubarModule,
    TableModule,
    PanelModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
      ConsultaCpnComponent
  ],
  providers : [
      ConsultaCpnService
  ]
})
export class ConsultasModule { }
