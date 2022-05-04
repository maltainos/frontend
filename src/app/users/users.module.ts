import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { CalendarModule } from 'primeng/calendar';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';

import { UsersViewsComponent } from './users-views/users-views.component';
import { UsersViewGridComponent } from './users-view-grid/users-view-grid.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersLevelComponent } from './users-level/users-level.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UsersLevelFormComponent } from './users-level-form/users-level-form.component';
import { GrantAuthorityComponent } from './grant-authority/grant-authority.component';

@NgModule({
    declarations: [
        UsersLevelComponent,
        UsersViewGridComponent,
        UsersViewsComponent,
        UsersFormComponent,
        PasswordResetComponent,
        UsersLevelFormComponent,
        GrantAuthorityComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        BrowserAnimationsModule,
        FormsModule,

        ButtonModule,
        CardModule,
        TableModule,
        MenubarModule,
        CalendarModule,
        DividerModule,
        MessagesModule,
        MessageModule,
        InputTextModule,
        TooltipModule,
        DividerModule,
        ToastModule,
        CheckboxModule,
        MultiSelectModule
    ],
    exports : [
        PasswordResetComponent,
        UsersLevelComponent,
        UsersViewsComponent,
        UsersFormComponent
    ],
    providers : []
})
export class UsersModule { }
