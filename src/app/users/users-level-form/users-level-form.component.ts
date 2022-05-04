import { UserLevelService } from 'src/app/service/user-level.service';
import { UserLevel } from './../../interface/user-level.model';
import { Role } from './../../interface/role.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { RoleService } from './../../service/role.service';

@Component({
  selector: 'app-users-level-form',
  templateUrl: './users-level-form.component.html',
  styleUrls: ['./users-level-form.component.css']
})
export class UsersLevelFormComponent implements OnInit {

    roles : Role[] = [];
    roleToGroup : string[] = [];
    constructor(private roleService : RoleService,
        private userLevelService : UserLevelService
    ) { }

    ngOnInit(): void {
        this.getRoles();
    }

    private getRoles(){
        this.roleService.listar().subscribe(
            (returnValue : Role[]) => {
                this.roles = returnValue;
            },() => {
                alert('Érro ao processar servico remoto');
            }
        )
    }

    public salvar(userLevelForm : NgForm){
        const userLevel : UserLevel = userLevelForm.value;
    //    console.log(userLevel);
        this.userLevelService.salvar(userLevel).subscribe(
            (returnValue : any) => {
                console.log(returnValue);
            }
        );
    }

}
