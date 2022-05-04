import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PregnancyService } from './../../service/pregnancy.service';
import { NgForm } from '@angular/forms';
import { AbortoEnumeration } from './../../interface/tipo-aborto.model';
import { GravidezStatus } from './../../interface/gravidez-status.mode';
import { Component, OnInit } from '@angular/core';
import { Gravidez } from 'src/app/interface/gravidez.model';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-gravidez-view',
  templateUrl: './gravidez-view.component.html',
  styleUrls: ['./gravidez-view.component.css']
})
export class GravidezViewComponent implements OnInit {

    gravidezes: Gravidez[] = [];
    gravidezStatus : any[] = [];
    tipoAborto : any[] = [];
    gravidez : Gravidez;
    display : boolean = false;

    constructor(
        private route : ActivatedRoute,
        private pacienteService : PacienteService,
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
        const pacienteId = this.route.snapshot.params['pacienteId'];
        this.pacienteService.listarGravidez(pacienteId).subscribe(
            (returnValue : Gravidez[]) => {
                this.gravidezes = returnValue;
                console.log(returnValue);
            }, (error : HttpErrorResponse) => {
                this.showError('Error');
                console.log('Error');
            }
        );
    }

    public salvar(formGravidez : NgForm){
        const pacienteId = this.route.snapshot.params['pacienteId'];

        this.pacienteService.salvarGravidez(this.gravidez, pacienteId).subscribe(
            (returnValue : Gravidez) => {
                this.showSuccess();
                this.display = false;
                formGravidez.reset();
                this.gravidez = new Gravidez();
                this.listar();
            },(error : HttpErrorResponse) => {
                formGravidez.reset();
                this.gravidez = new Gravidez();
                this.showError(error.error.message);
            }
        );
    }

    public showDialogGravidez(){
        this.display = true;
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
