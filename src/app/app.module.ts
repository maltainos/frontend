import { GravidezModule } from './gravidez/gravidez.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { PacientesModule } from './pacientes/pacientes.module';
import { ConsultasModule } from './consultas/consultas.module';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';

import { UserService } from './users/user.service';
import { DashboardService } from './service/dashboard.service';
import { SecurityModule } from './security/security.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,

        ConsultasModule,
        PacientesModule,
        UsersModule,
        CoreModule,
        GravidezModule,
        SecurityModule
    ],
    providers: [
        UserService,
        DashboardService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
