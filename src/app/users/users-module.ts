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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { UserService } from '../services/user-service';




@NgModule({
  declarations: [
    Users,
    UserList,
    UserForm,
  ],
  providers:[UserService],
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
    MatGridListModule,
    MatSelectModule
  ],
  exports: [
    Users
  ]
})
export class UsersModule { }
