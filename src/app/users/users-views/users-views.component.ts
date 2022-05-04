import { MenuItem, MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

import { User } from './../../interface/user.model';
import { UserService } from './../user.service';

@Component({
  selector: 'app-users-views',
  templateUrl: './users-views.component.html',
  styleUrls: ['./users-views.component.css']
})

export class UsersViewsComponent implements OnInit {

    userName : string = "";
    start : Date = new Date();
    stop : Date = new Date();

    total : Number = 0;
    page : Number = 0;

    users : User[] = [];
    items: MenuItem[] = [];

    deleteUser : User = new User();
    constructor(
        private userService : UserService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.listar();
        this.criarMenuItem();
    }

    listar(page = 0, limit = 10){
        this.userService.listar().subscribe(
            (response : User[]) => {
                this.users = response;
            },(err) => {}
        )
    }

    exportPDF(){
        this.userService.exportPDF().subscribe();
    }

    exportCSV(){
        this.userService.exportCSV().subscribe();
    }

    exportEXCEL(){
        this.userService.exportEXCEL().subscribe();
    }

    excluir(user : User){
        this.deleteUser = user;
        console.log(this.deleteUser);
        this.showConfirm();
    }

    showConfirm() {
        this.messageService.clear();
        this.messageService.add({key: 'confirm', sticky: true, severity:'warn', summary:'CONFIRMACAO', detail:'Voce pretende excluir este registo?'});
    }

    showSuccess() {
        this.messageService.clear();
        this.messageService.add({ key: 'success', severity:'success', summary: 'SUCESSO!', detail: 'Usuario excluido com Sucesso'});
    }

    onConfirm() {
        console.log(this.deleteUser);
        this.userService.excluir(this.deleteUser.userId).subscribe(
            () => {
                this.listar();
                this.showSuccess();
                this.deleteUser = new User();
            },
            (err) => {
                this.onReject();
                //this.showError(err.error.message);
            }
        );
    }

    showError(info : string) {
        this.messageService.add({key: 'error', severity:'error', summary: 'ERRO!', detail: info});
    }

    onReject() {
        this.deleteUser = new User();
        this.messageService.clear('confirm');
    }

    criarMenuItem(){
        this.items = [
            {
                label: 'PDF',
                icon: 'pi pi-fw pi-file-pdf',
                command : () => {
                    this.exportPDF();
                }
            },{
                label: 'CSV',
                icon: 'pi pi-fw pi-file-csv',
                command : () => {
                    this.exportCSV();
                }
            },{
                label: 'EXCEL',
                icon: 'pi pi-fw pi-file-excel',
                command : () => {
                    this.exportEXCEL();
                }
            },{
                label: 'Novo Usuario',
                icon: 'pi pi-fw pi-user-plus',
                url: 'users/new'
            }
        ];
    }


}
