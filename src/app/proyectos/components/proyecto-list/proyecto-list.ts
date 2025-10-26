import { Component, Input, ViewChild } from '@angular/core';
import { Proyecto } from '../../interface/proyecto';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-proyecto-list',
  standalone: false,
  templateUrl: './proyecto-list.html',
  styleUrl: './proyecto-list.css'
})
export class ProyectoList {
  @Input() proyectos: Proyecto[] = [];
  dataSource = new MatTableDataSource<Proyecto>(this.proyectos);
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'estado'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.proyectos;
  }
}
