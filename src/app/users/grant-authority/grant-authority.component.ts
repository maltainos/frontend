import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { UserService } from './../user.service';
import { User } from './../../interface/user.model';
import { UserLevel } from 'src/app/interface/user-level.model';
import { UserLevelService } from 'src/app/service/user-level.service';


@Component({
  selector: 'app-grant-authority',
  templateUrl: './grant-authority.component.html',
  styleUrls: ['./grant-authority.component.css']
})
export class GrantAuthorityComponent implements OnInit {

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

        const userId = this.route.snapshot.params['userId'];
        this.userService.grantAuthority(this.selectedUserLevels, userId)
        .subscribe( (returnValue : User) => {
            this.showSuccess();
            this.router.navigate(['/users', returnValue.userId]);
        },(error : HttpErrorResponse) => {
            console.log(error);
            this.showError(error.error.message);
        });
    }

    getUser(userId : string){
        this.userService.getUser(userId).subscribe(
            (returnValue : User) => {
                this.user = returnValue;
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
