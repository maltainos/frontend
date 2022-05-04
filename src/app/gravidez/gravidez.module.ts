import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'primeng/toast';

import { GravidezViewAllComponent } from './gravidez-view-all/gravidez-view-all.component';



@NgModule({
  declarations: [
    GravidezViewAllComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    PanelModule,
    ToastModule,
    TableModule,
    ButtonModule,
    DialogModule,
    TooltipModule,
    CalendarModule,
    DropdownModule,
    InputTextModule
  ],
  exports: [
      GravidezViewAllComponent
  ]
})
export class GravidezModule { }
