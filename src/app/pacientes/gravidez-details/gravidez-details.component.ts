import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Gravidez } from 'src/app/interface/gravidez.model';
import { Component, OnInit } from '@angular/core';
import { AbortoEnumeration } from 'src/app/interface/tipo-aborto.model';
import { GravidezStatus } from 'src/app/interface/gravidez-status.mode';
import { PregnancyService } from 'src/app/service/pregnancy.service';

@Component({
  selector: 'app-gravidez-details',
  templateUrl: './gravidez-details.component.html',
  styleUrls: ['./gravidez-details.component.css']
})
export class GravidezDetailsComponent implements OnInit {

    items : [] = [];

    gravidezStatus : any[] = [];
    tipoAborto : any[] = [];
    gravidez !: Gravidez;

    constructor(
        private route : ActivatedRoute,
        private gravidezService : PregnancyService
    ) {}

    ngOnInit(): void {
        this.tipoAborto = Object.values(AbortoEnumeration);
        this.gravidezStatus = Object.values(GravidezStatus);
        this.getGravidez();
    }

    public get isEdit() : boolean{
        const gravidezId = this.route.snapshot.params['gravidezId'];
        if(gravidezId)
            return true;
        return false;
    }

    public getGravidez(){
        const gravidezId = this.route.snapshot.params['gravidezId'];
        this.gravidezService.getGravidez(gravidezId).subscribe(
            (returnValue : Gravidez) => {
                console.log(returnValue);
                this.gravidez = returnValue;
            }, (error : HttpErrorResponse) => {
                console.log(error);
            }
        );
    }

}
