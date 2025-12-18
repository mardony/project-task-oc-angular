import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing-module';
import { Users } from './users';
import { UserTable } from './user-table/user-table';
import { UserForm } from './user-form/user-form';
import { SharedModule } from '../../../shared/shared-module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersFeature } from './store/users.reducer';
import { UsersEffects } from './store/users.effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    Users,
    UserTable,
    UserForm
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    StoreModule.forFeature(usersFeature),
    EffectsModule.forFeature([UsersEffects]),
    MatProgressSpinnerModule
  ]
})
export class UsersModule { }