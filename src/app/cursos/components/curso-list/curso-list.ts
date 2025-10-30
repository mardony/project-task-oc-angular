import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Curso } from '../../interface/curso';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-curso-list',
  standalone: false,
  templateUrl: './curso-list.html',
  styleUrl: './curso-list.css'
})
export class CursoList implements AfterViewInit, OnChanges {
  @Input() cursos: Curso[] = [];

  dataSource = new MatTableDataSource<Curso>();
  displayedColumns: string[] = ['id', 'asignatura', 'descripcion', 'fechaInicio','fechaFin'];
  ngOnChanges(changes: SimpleChanges) {
    if (changes['cursos']) {
      this.dataSource.data = this.cursos;
      if (this.paginator) {
        this.paginator.length = this.cursos.length;
      }
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.cursos;
  }

}
