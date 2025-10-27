import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Proyecto } from '../../interface/proyecto';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-proyecto-list',
  standalone: false,
  templateUrl: './proyecto-list.html',
  styleUrl: './proyecto-list.css'
})
export class ProyectoList implements  AfterViewInit, OnChanges {
  @Input() proyectos: Proyecto[] = [];

  dataSource = new MatTableDataSource<Proyecto>();
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'estado'];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['proyectos']) {
      this.dataSource.data = this.proyectos;
      if (this.paginator) {
        this.paginator.length = this.proyectos.length;
      }
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.proyectos;
  }
}
