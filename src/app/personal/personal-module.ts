import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personal } from './personal';
import { PersonalCampoList } from './components/personal-campo-list/personal-campo-list';
import { PersonalCampoForm } from './components/personal-campo-form/personal-campo-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../shared/shared-module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    Personal,
    PersonalCampoList,
    PersonalCampoForm
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  exports: [
    Personal
  ]
})
export class PersonalModule { }
