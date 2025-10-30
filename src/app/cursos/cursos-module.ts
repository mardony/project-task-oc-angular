import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cursos } from './cursos';
import { CursoList } from './components/curso-list/curso-list';
import { CursoForm } from './components/curso-form/curso-form';
import { SharedModule } from '../shared/shared-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    Cursos,
    CursoList,
    CursoForm
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
    Cursos
  ]
})
export class CursosModule { }
