import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personal } from './personal';
import { PersonalCampoList } from './components/personal-campo-list/personal-campo-list';
import { PersonalCampoForm } from './components/personal-campo-form/personal-campo-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    Personal,
    PersonalCampoList,
    PersonalCampoForm
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    Personal
  ]
})
export class PersonalModule { }
