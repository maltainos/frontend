import { Component, OnInit, Input } from '@angular/core';

import { Paciente } from './../../interface/paciente.model';

@Component({
  selector: 'app-paciente-view-grid',
  templateUrl: './paciente-view-grid.component.html',
  styleUrls: ['./paciente-view-grid.component.css']
})
export class PacienteViewGridComponent{

    @Input() pacientes? : any;
}
