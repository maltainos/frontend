import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { PacienteService } from './../paciente.service';
import { PessoaReferencia } from './../../interface/pessoa-referencia.model';
import { Filiacao } from './../../interface/filiacao.model';
import { Paciente } from 'src/app/interface/paciente.model';
import { NgForm } from '@angular/forms';
import { GrupoSanguineo } from './../../interface/grupo-sangue.model';
import { Component, OnInit } from '@angular/core';
import { EstadoCivil } from 'src/app/interface/estdo-civil.model';


@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})

export class PacienteFormComponent implements OnInit{

    estadoCivil : any;
    grupoSanguineo : any;
    pacienteRequest : Paciente;
    filiacao  : Filiacao;
    pessoaEmergencia : PessoaReferencia;

    constructor(
        private router : Router,
        private route : ActivatedRoute,
        private pacienteService : PacienteService){
        this.filiacao = new Filiacao();
        this.pacienteRequest = new Paciente();
        this.pessoaEmergencia = new PessoaReferencia();
    }


    get isEdit() : boolean {
        const pacienteId = this.route.snapshot.params['pacienteId'];
        if(pacienteId){
            return true;
        }
        return false;
    }

    ngOnInit(): void {
        this.loadGrupoSangue();
        this.loadEstadoCivil();
        this.getpaciente();
    }

    private loadEstadoCivil(){
        this.estadoCivil = Object.values(EstadoCivil);
    }
    private loadGrupoSangue(){
        this.grupoSanguineo = Object.values(GrupoSanguineo);
    }

    public salvar(formPaciente : NgForm){
        this.pacienteRequest.filiacao = this.filiacao;
        this.pacienteRequest.pessoaReferencia = this.pessoaEmergencia;
        this.pacienteRequest.contactos = [];
        this.pacienteRequest.enderecos = [];
        this.pacienteService.salvar(this.pacienteRequest).subscribe(
            (returnValue : Paciente) => {
                this.router.navigate(['/pacientes', returnValue.pacienteId]);
            },(error : HttpErrorResponse) => {
                console.log(error.error.message);
            }
        );
    }

    public getpaciente(){
        if(this.isEdit){
            const pacienteId = this.route.snapshot.params['pacienteId'];
            this.pacienteService.findOne(pacienteId).subscribe(
                (returnValue : Paciente) => {
                    this.pacienteRequest = returnValue;
                    this.filiacao = returnValue.filiacao;
                    this.pessoaEmergencia = returnValue.pessoaReferencia;
                }, (error : HttpErrorResponse)=>{
                    console.log(error);
                }
            );
        }
    }
}
