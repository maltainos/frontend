import { RoleService } from './../../service/role.service';
import { UserLevel } from './../../interface/user-level.model';
import { UserLevelService } from './../../service/user-level.service';
import { Car } from './../../models/car.model';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-level',
  templateUrl: './users-level.component.html',
  styleUrls: ['./users-level.component.css']
})
export class UsersLevelComponent implements OnInit {

    userLevel : UserLevel[] = [];
    items: MenuItem[] = [];
    constructor(
        private userLevelService : UserLevelService,
        private roleService : RoleService
    ) { }

    ngOnInit(): void {
        this.listarGrupos();
        this.criarGrupo();
    }

    listarGrupos(){
        this.userLevelService.listar().subscribe(
            (returnValue : UserLevel[]) => {
                this.userLevel = returnValue;
            }
        );
    }

    criarGrupo(){
        this.items = [{
            label : 'NOVO',
            icon : 'pi pi-users',
            url : 'users-level/new'
        }];
    }



}
