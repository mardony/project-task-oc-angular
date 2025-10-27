import { Component } from '@angular/core';
import { Proyecto } from './interface/proyecto';

@Component({
  selector: 'app-proyectos',
  standalone: false,
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {
  proyectos: Proyecto[] = [
    { id: 1, nombre: 'Proyecto A', descripcion: 'Descripción del Proyecto A', estado: 'En progreso' },
    { id: 2, nombre: 'Proyecto B', descripcion: 'Descripción del Proyecto B', estado: 'Completado' },
    { id: 3, nombre: 'Proyecto C', descripcion: 'Descripción del Proyecto C', estado: 'Pendiente' },
    { id: 4, nombre: 'Proyecto D', descripcion: 'Descripción del Proyecto D', estado: 'En progreso' },
    { id: 5, nombre: 'Proyecto E', descripcion: 'Descripción del Proyecto E', estado: 'Completado' },
    { id: 6, nombre: 'Proyecto F', descripcion: 'Descripción del Proyecto F', estado: 'Pendiente' },
    { id: 7, nombre: 'Proyecto G', descripcion: 'Descripción del Proyecto G', estado: 'En progreso' },
    { id: 8, nombre: 'Proyecto H', descripcion: 'Descripción del Proyecto H', estado: 'Completado' },
    { id: 9, nombre: 'Proyecto I', descripcion: 'Descripción del Proyecto I', estado: 'Pendiente' }

  ];

  onAddProyecto(proyecto: Proyecto) {
    console.log('Nuevo proyecto agregado:', proyecto);

    const newProyecto= {
      ...proyecto,
      id: this.proyectos.length >0? this.proyectos[this.proyectos.length -1].id +1 : 1
    };
    this.proyectos = [...this.proyectos, newProyecto];
  }
}
