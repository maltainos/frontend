import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

import { PacienteService } from './../paciente.service';
import { Paciente } from './../../interface/paciente.model';

@Component({
  selector: 'app-paciente-view',
  templateUrl: './paciente-view.component.html',
  styleUrls: ['./paciente-view.component.css']
})
export class PacienteViewComponent implements OnInit {

    date3: Date = new Date();
    pacientes: Paciente[] = [];
    items: MenuItem[] = [];

    constructor(private pacienteService : PacienteService) { }

    ngOnInit(): void {
        this.createMenuItem();
        this.listar();
    }

    listar(){
        this.pacienteService.search().subscribe(
            (returnValue : Paciente[]) => {
                this.pacientes = returnValue;
            },(error : any) => {
                alert("Erro ao processo servico remoto");
            }
        )
    }



    createMenuItem(){
        this.items = [
            {
                label: 'PDF',
                icon: 'pi pi-fw pi-file-pdf',
                routerLink: '/export/pdf'
            },
            {
                label: 'CSV',
                icon: 'pi pi-fw pi-file-csv',
                routerLink: '/export/csv'
            },
            {
                label: 'EXCEL',
                icon: 'pi pi-fw pi-file-excel',
                routerLink: '/export/excel'
            },
            {
                label: 'Novo Paciente',
                icon:  'pi pi-fw pi-user-plus',
                routerLink: '/pacientes/new'
            }
        ];
    }

}
