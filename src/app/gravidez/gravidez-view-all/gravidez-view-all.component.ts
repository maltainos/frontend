import { HttpErrorResponse } from '@angular/common/http';
import { GravidezStatus } from './../../interface/gravidez-status.mode';
import { AbortoEnumeration } from './../../interface/tipo-aborto.model';
import { MessageService } from 'primeng/api';
import { PregnancyService } from './../../service/pregnancy.service';
import { NgForm } from '@angular/forms';
import { Gravidez } from './../../interface/gravidez.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gravidez-view-all',
  templateUrl: './gravidez-view-all.component.html',
  styleUrls: ['./gravidez-view-all.component.css']
})
export class GravidezViewAllComponent implements OnInit {

    gravidezes: Gravidez[] = [];
    gravidezStatus : any[] = [];
    tipoAborto : any[] = [];
    gravidez : Gravidez;

    constructor(
        private pregnacyService : PregnancyService,
        private messageService : MessageService
        ) {
        this.gravidez = new Gravidez();
    }

    ngOnInit(): void {
        this.tipoAborto = Object.values(AbortoEnumeration);
        this.gravidezStatus = Object.values(GravidezStatus);
        this.listar();
    }

    public listar(){
        this.pregnacyService.getGravidezes().subscribe(
            (returnValue : Gravidez[]) => {
                this.gravidezes = returnValue;
            },(error : HttpErrorResponse) => {
                console.log('Error');
            }
        );
    }

    public salvar(formGravidez : NgForm){


    }

    showSuccess() {
        this.messageService.clear();
        this.messageService.add({ key: 'success', severity:'success', summary: 'SUCESSO!', detail: 'Gravidez salvo com sucesso'});
    }

    showError(error : string) {
        this.messageService.clear();
        this.messageService.add({ key: 'error', severity:'error', summary: 'ERRO!', detail: error });
    }
}
