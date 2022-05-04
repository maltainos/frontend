import { GravidezViewAllComponent } from './gravidez/gravidez-view-all/gravidez-view-all.component';
import { GravidezViewComponent } from './pacientes/gravidez-view/gravidez-view.component';
import { GravidezDetailsComponent } from './pacientes/gravidez-details/gravidez-details.component';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { GrantAuthorityComponent } from './users/grant-authority/grant-authority.component';
import { ConsultaCpnComponent } from './consultas/consulta-cpn/consulta-cpn.component';
import { UsersLevelComponent } from './users/users-level/users-level.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { PacienteFormComponent } from './pacientes/paciente-form/paciente-form.component';
import { PacienteViewComponent } from './pacientes/paciente-view/paciente-view.component';
import { UsersViewsComponent } from './users/users-views/users-views.component';
import { PasswordResetComponent } from './users/password-reset/password-reset.component';
import { LoginComponent } from './security/login/login.component';
import { HomeComponent } from './core/dashboard/home/home.component';
import { NotFoundComponent } from './core/error/not-found/not-found.component';
import { UnauthorizeComponent } from './core/error/unauthorize/unauthorize.component';
import { UsersLevelFormComponent } from './users/users-level-form/users-level-form.component';

const routes: Routes = [

    { path : '', redirectTo : 'home', pathMatch : 'full' },
    { path : 'login', component : LoginComponent },
    { path : 'logout', component : LoginComponent },
    { path : 'home', component : HomeComponent },
    { path : 'users-level', component : UsersLevelComponent},
    { path : 'users-level/new', component : UsersLevelFormComponent},
    { path : 'users', component : UsersViewsComponent },
    { path : 'users/new', component : UsersFormComponent },
    { path : 'users/:userId', component : UsersFormComponent },
    { path : 'users/:userId/authorities', component : GrantAuthorityComponent },
    { path : 'pacientes', component : PacienteViewComponent },
    { path : 'pacientes/new', component : PacienteFormComponent },
    { path : 'pacientes/:pacienteId', component : PacienteFormComponent },
    { path : 'gravidezes', component : GravidezViewAllComponent},
    { path : 'gravidez/:gravidezId', component : GravidezDetailsComponent },
    { path : 'consultas-cpn', component : ConsultaCpnComponent },

    { path : 'password-reset', component : PasswordResetComponent },
    { path : '404', component : NotFoundComponent },
    { path : '401', component : UnauthorizeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router : Router){
//    this.router.errorHandler = (error : any) => {
      //this.router.navigate(['/404']);
//    }
  }
 }
