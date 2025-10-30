import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inscripciones } from './inscripciones';
import { InscripcionList } from './components/inscripcion-list/inscripcion-list';
import { InscripcionForm } from './components/inscripcion-form/inscripcion-form';



@NgModule({
  declarations: [
    Inscripciones,
    InscripcionList,
    InscripcionForm
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Inscripciones
  ]
})
export class InscripcionesModule { }
