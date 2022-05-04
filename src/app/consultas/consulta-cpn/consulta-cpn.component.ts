import { HttpErrorResponse } from '@angular/common/http';
import { ConsultaCpnService } from './../../service/consulta-cpn.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-cpn',
  templateUrl: './consulta-cpn.component.html',
  styleUrls: ['./consulta-cpn.component.css']
})
export class ConsultaCpnComponent implements OnInit {

    consultasCPN : [] = [];
    items : [] = [];
    apartirDe : Date = new Date();
    ate : Date = new Date();

    constructor(
        private router : ActivatedRoute,
        private consultaCpnService : ConsultaCpnService
    ) {}

    ngOnInit(): void {
        this.listar();
    }

    public listar(){
        this.consultaCpnService.listar().subscribe(
            (returnValue : any) => {
                this.consultasCPN = returnValue;
                console.log(returnValue);
            },(error : HttpErrorResponse) => {
                console.log(error);
            }
        );
    }

    public buscarPaciente(pacienteId : string){

    }


    public salvar(formConsulta : NgForm){

    }

    public pesquisar(formFilter : NgForm){

    }


}
