import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Proyectos } from './proyectos';
import { ProyectoList } from './components/proyecto-list/proyecto-list';
import { ProyectoForm } from './components/proyecto-form/proyecto-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared-module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    Proyectos,
    ProyectoList,
    ProyectoForm
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
    Proyectos
  ]
})
export class ProyectosModule { }
