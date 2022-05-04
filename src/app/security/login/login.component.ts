import { AuthConfigService } from './../../service/auth-config.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';;

import { AuthService } from '../auth.service';

import { UserLoginRequest } from '../../interface/user-login.model';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    userLogin : UserLoginRequest;

    jwtPayLoad! : Object;

    constructor(
        private router : Router,
        private authService : AuthService,
        private messageService : MessageService,
        private authConfigService : AuthConfigService
    ) {
        this.userLogin = new UserLoginRequest();
        this.loadToken();
    }

    ngOnInit(): void {

    }

    login(formLogin : NgForm){
        this.authService.login(this.userLogin).subscribe(
            (returnValue : any) => {
                this.authConfigService.config(returnValue);
            },(error : HttpErrorResponse) => {
                console.log(error);
                if(error.status === 403){
                    formLogin.reset();
                    this.userLogin = new UserLoginRequest();
                    this.showError('Email ou Senha Invalida!');
                }else{
                    this.showError('Erro ao processar a solicitacao');
                }
            });
    }

    private storeToken(token : string){
        this.jwtPayLoad = jwtHelper.decodeToken(token);
        localStorage.setItem('sigsmiToken', token);
    }

    private loadToken(){
        const token = localStorage.getItem('sigsmiToken');
        if(token){
            this.storeToken(token);
        }
    }

    showError(info : string) {
        this.messageService.add({key: 'error', severity:'error', summary: 'ERRO!', detail: info});
    }
}
