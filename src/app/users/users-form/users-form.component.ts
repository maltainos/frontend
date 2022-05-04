import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { MessageService } from 'primeng/api';

import { UserService } from './../user.service';
import { User } from './../../interface/user.model';
import { UserLevel } from './../../interface/user-level.model';
import { UserLevelService } from './../../service/user-level.service';


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

    user : User = new User();
    selectedUserLevels : UserLevel[] = [];
    userLevels : UserLevel[] = [];

    constructor(
        private router : Router,
        private route : ActivatedRoute,
        private userService : UserService,
        private messageService: MessageService,
        private userLevelService : UserLevelService
    ) {
        this.user = new User();
    }

    ngOnInit(): void {
        const userId = this.route.snapshot.params['userId'];

        if(userId){
            this.getUser(userId);
            this.listarGrupos();
        }
    }

    listarGrupos(){
        this.userLevelService.listar().subscribe(
            (returnValue : UserLevel[]) => {
                this.userLevels = returnValue;
            },(error : any) => {
                this.showError('Erro ao processar o servico remoto');
            }
        );
    }

    salvar(formUser : NgForm){
        //this.user = formUser.value;
        console.log(this.user);
        this.userService.salvar(this.user).subscribe(
            (returnValue : User) => {
                this.showSuccess();
                this.user = returnValue;
                this.router.navigate(['/users', returnValue.userId, 'authorities']);
            }, (error : HttpErrorResponse) => {
                this.showError(error.error.mensagem);
            }
        );
    }

    getUser(userId : string){
        this.userService.getUser(userId).subscribe(
            (returnValue : User) => {
                this.user = returnValue;
                this.selectedUserLevels = returnValue.groups;
            }, (error : HttpErrorResponse) => {
                this.showError(error.error.mensagem);
            }
        );
    }

    get edit(){
        return Boolean(this.user.userId);
    }

    showSuccess() {
        this.messageService.clear();
        this.messageService.add({ key: 'success', severity:'success', summary: 'SUCESSO!', detail: 'Usuario criado com sucesso'});
    }

    showError(error : string) {
        this.messageService.clear();
        this.messageService.add({ key: 'error', severity:'error', summary: 'ERRO!', detail: error });
    }
}
