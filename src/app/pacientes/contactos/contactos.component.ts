import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

    display = false;
    contactos : [] = []

    constructor() { }

    public ngOnInit(): void {
    }

    public showDialogContacto(){
        this.display = true;
    }

    public salvar(formContacto : NgForm){

    }

}
