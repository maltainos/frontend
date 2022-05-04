import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.component.html',
  styleUrls: ['./enderecos.component.css']
})
export class EnderecosComponent implements OnInit {

    display = false;
    enderecos : [] = []

    constructor(
        private router : ActivatedRoute,
        private pacienteService : PacienteService
    ) { }

    public ngOnInit(): void {
        this.getEnderecos();
    }

    public showDialogContacto(){
        this.display = true;
    }

    public getEnderecos(){
        const pacienteId = this.router.snapshot.params['pacienteId'];
        this.pacienteService.getAddresses(pacienteId).subscribe(
            (returnValue : any) => {
                this.enderecos = returnValue;
                console.log(returnValue);
            }, (error : HttpErrorResponse) => {
                console.log(error);
            }
        );
    }

    public salvar(formContacto : NgForm){

    }
}
