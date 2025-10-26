import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './users';
import { UserList } from './components/user-list/user-list';
import { UserForm } from './components/user-form/user-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared-module';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    Users,
    UserList,
    UserForm
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  exports: [
    Users
  ]
})
export class UsersModule { }
