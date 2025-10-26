import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Proyectos } from './proyectos';
import { ProyectoList } from './components/proyecto-list/proyecto-list';
import { ProyectoForm } from './components/proyecto-form/proyecto-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    Proyectos,
    ProyectoList,
    ProyectoForm
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    Proyectos
  ]
})
export class ProyectosModule { }
