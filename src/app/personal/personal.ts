import { Component } from '@angular/core';
import { IPersonal } from './interface/ipersonal';
@Component({
  selector: 'app-personal',
  standalone: false,
  templateUrl: './personal.html',
  styleUrl: './personal.css'
})
export class Personal {
  personal: IPersonal[] = [
    { id: 1, nombre: 'Ana', apellido: 'Gomez', puesto: 'Gerente', email: 'ana@ejemplo.com' },
    { id: 2, nombre: 'Luis', apellido: 'Martinez', puesto: 'Desarrollador', email: 'luis@ejemplo.com' },
    { id: 3, nombre: 'Marta', apellido: 'Lopez', puesto: 'Diseñadora', email: 'marta@ejemplo.com' },
    { id: 4, nombre: 'Carlos', apellido: 'Perez', puesto: 'Analista', email: 'carlos@ejemplo.com' },
    { id: 5, nombre: 'Sofia', apellido: 'Ramirez', puesto: 'Tester', email: 'sofia@ejemplo.com' },
    { id: 6, nombre: 'Diego', apellido: 'Torres', puesto: 'Soporte', email: 'diego@ejemplo.com' },
    { id: 7, nombre: 'Lucia', apellido: 'Vargas', puesto: 'Recursos Humanos', email: 'lucia@ejemplo.com' },
    { id: 8, nombre: 'Javier', apellido: 'Sanchez', puesto: 'Marketing', email: 'javier@ejemplo.com' },
    { id: 9, nombre: 'Elena', apellido: 'Diaz', puesto: 'Ventas', email: 'elena@ejemplo.com' },
    { id: 10, nombre: 'Fernando', apellido: 'Gonzalez', puesto: 'Finanzas', email: 'fernando@ejemplo.com' },
    { id: 11, nombre: 'Isabel', apellido: 'Morales', puesto: 'Administracion', email: 'isabel@ejemplo.com' }
  ];

  onAddPersonal(persona: IPersonal) {
    console.log('Nuevo personal agregado:', persona);

    const newPersona= {
      ...persona,
      id: this.personal.length >0? this.personal[this.personal.length -1].id +1 : 1
    };
    this.personal = [...this.personal, newPersona];
  }
}
