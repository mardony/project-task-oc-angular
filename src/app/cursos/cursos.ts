import { Component } from '@angular/core';
import { Curso } from './interface/curso';

@Component({
  selector: 'app-cursos',
  standalone: false,
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class Cursos {
  cursos: Curso[] = [
    { id: 1, asignatura: 'Matemáticas', descripcion: 'Curso de Matemáticas Básicas', fechaInicio: new Date('2024-01-15'), fechaFin: new Date('2024-06-15') },
    { id: 2, asignatura: 'Historia', descripcion: 'Curso de Historia Universal', fechaInicio: new Date('2024-02-01'), fechaFin: new Date('2024-07-01') },
    { id: 3, asignatura: 'Ciencias', descripcion: 'Curso de Ciencias Naturales', fechaInicio: new Date('2024-03-10'), fechaFin: new Date('2024-08-10') },
    { id: 4, asignatura: 'Literatura', descripcion: 'Curso de Literatura Clásica', fechaInicio: new Date('2024-04-05'), fechaFin: new Date('2024-09-05') },
    { id: 5, asignatura: 'Arte', descripcion: 'Curso de Historia del Arte', fechaInicio: new Date('2024-05-20'), fechaFin: new Date('2024-10-20') } ];

  onAddCurso(curso: Curso) {
    console.log('Nuevo curso agregado:', curso);
    const newCurso = {
      ...curso,
      id: this.cursos.length > 0 ? this.cursos[this.cursos.length - 1].id + 1 : 1
    };
    this.cursos = [...this.cursos, newCurso];
  }

}
