import { Component } from '@angular/core';
import { Alumno } from './interface/alumno';


@Component({
  selector: 'app-alumnos',
  standalone: false,
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class Alumnos {

  alumnos: Alumno[] = [
    { id: 1, nombre: 'Raúl', apellidoPaterno: 'González', apellidoMaterno: 'López', dni: '12345678', email: 'raul@example.com', fechaNacimiento: new Date('2000-01-01') },
    { id: 2, nombre: 'María', apellidoPaterno: 'Rodríguez', apellidoMaterno: 'Martínez', dni: '87654321', email: 'maria@example.com', fechaNacimiento: new Date('2001-02-02') },
    { id: 3, nombre: 'Luis', apellidoPaterno: 'Hernández', apellidoMaterno: 'García', dni: '11223344', email: 'luis@example.com', fechaNacimiento: new Date('2002-03-03') },
    { id: 4, nombre: 'Ana', apellidoPaterno: 'Pérez', apellidoMaterno: 'Sánchez', dni: '44332211', email: 'ana@example.com', fechaNacimiento: new Date('2003-04-04') },
    { id: 5, nombre: 'Carlos', apellidoPaterno: 'Ramírez', apellidoMaterno: 'Torres', dni: '55667788', email: 'carlos@example.com', fechaNacimiento: new Date('2004-05-05') },
    { id: 6, nombre: 'Lucía', apellidoPaterno: 'Flores', apellidoMaterno: 'Vargas', dni: '88776655', email: 'lucia@example.com', fechaNacimiento: new Date('2005-06-06') },
    { id: 7, nombre: 'Jorge', apellidoPaterno: 'Castillo', apellidoMaterno: 'Rojas', dni: '99887766', email: 'jorge@example.com', fechaNacimiento: new Date('2006-07-07') },
    { id: 8, nombre: 'Sofía', apellidoPaterno: 'Silva', apellidoMaterno: 'Mendoza', dni: '66778899', email: 'sofia@example.com', fechaNacimiento: new Date('2007-08-08') },
    { id: 9, nombre: 'Diego', apellidoPaterno: 'Morales', apellidoMaterno: 'Cruz', dni: '33445566', email: 'diego@example.com', fechaNacimiento: new Date('2008-09-09') },
    { id: 10, nombre: 'Elena', apellidoPaterno: 'Ortiz', apellidoMaterno: 'Jiménez', dni: '77665544', email: 'elena@example.com', fechaNacimiento: new Date('2009-10-10') },
    { id: 11, nombre: 'Mateo', apellidoPaterno: 'Silva', apellidoMaterno: 'Fernández', dni: '22334455', email: 'mateo@example.com', fechaNacimiento: new Date('2010-11-11') }
  ];


  onAddAlumno(alumno: Alumno) {
    console.log('Nuevo alumno agregado:', alumno);
    const newAlumno = {
      ...alumno,
      id: this.alumnos.length > 0 ? this.alumnos[this.alumnos.length - 1].id + 1 : 1
    };
    this.alumnos = [...this.alumnos, newAlumno];
  }
}