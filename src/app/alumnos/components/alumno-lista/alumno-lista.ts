import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Alumno } from '../../interface/alumno';

@Component({
  selector: 'app-alumno-lista',
  standalone: false,
  templateUrl: './alumno-lista.html',
  styleUrl: './alumno-lista.css'
})
export class AlumnoLista implements AfterViewInit, OnChanges {
  @Input() alumnos: Alumno[] = [];

  dataSource = new MatTableDataSource<Alumno>();
  displayedColumns: string[] = ['id', 'nombre', 'apellidoPaterno', 'apellidoMaterno', 'dni', 'email', 'fechaNacimiento'];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['alumnos']) {
      this.dataSource.data = this.alumnos;
      if (this.paginator) {
        this.paginator.length = this.alumnos.length;
      }
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.alumnos;
  }

}
