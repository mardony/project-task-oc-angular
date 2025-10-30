import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumnos } from './alumnos';
import { AlumnoLista } from './components/alumno-lista/alumno-lista';
import { AlumnoForm } from './components/alumno-form/alumno-form';
import { SharedModule } from '../shared/shared-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    Alumnos,
    AlumnoLista,
    AlumnoForm,
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
    MatSelectModule,
    MatButtonModule,
    MatGridListModule
  ],
  exports: [
    Alumnos
  ]
})
export class AlumnosModule { }
