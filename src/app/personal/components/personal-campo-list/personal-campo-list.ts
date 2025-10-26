import { Component, Input, ViewChild } from '@angular/core';
import { IPersonal } from '../../interface/ipersonal';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-personal-campo-list',
  standalone: false,
  templateUrl: './personal-campo-list.html',
  styleUrl: './personal-campo-list.css'
})
export class PersonalCampoList {
  @Input() personal: IPersonal[] = [];

  dataSource = new MatTableDataSource<IPersonal>(this.personal);
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'puesto', 'email'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.personal;
  }
}
