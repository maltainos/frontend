import { ToastModule } from 'primeng/toast';
import { PregnancyService } from './../service/pregnancy.service';
import { DialogModule } from 'primeng/dialog';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel'

import { PacienteViewGridComponent } from './paciente-view-grid/paciente-view-grid.component';
import { PacienteViewComponent } from './paciente-view/paciente-view.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { PacienteService } from './paciente.service';
import { GravidezViewComponent } from './gravidez-view/gravidez-view.component';
import { GravidezDetailsComponent } from './gravidez-details/gravidez-details.component';
import { ContactosComponent } from './contactos/contactos.component';
import { EnderecosComponent } from './enderecos/enderecos.component';


@NgModule({
    declarations: [
        PacienteFormComponent,
        PacienteViewComponent,
        PacienteViewGridComponent,
        GravidezViewComponent,
        GravidezDetailsComponent,
        ContactosComponent,
        EnderecosComponent
    ],
    imports: [
        RouterModule,
        CommonModule,

        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,

        ButtonModule,
        CalendarModule,
        MenubarModule,
        CardModule,
        DividerModule,
        InputNumberModule,
        InputMaskModule,
        DropdownModule,
        TableModule,
        ChipModule,
        TooltipModule,
        InputTextModule,
        PanelModule,
        DialogModule,
        ToastModule
    ],
    exports : [
        PacienteFormComponent,
        PacienteViewComponent,
        GravidezViewComponent
    ],
    providers: [
        PacienteService,
        PregnancyService,
    ]
})
export class PacientesModule { }
