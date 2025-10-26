import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { User } from '../../interface/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList  implements AfterViewInit, OnChanges {
  @Input() users: User[] = [];

  dataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = ['id', 'nombre', 'rol', 'email'];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['users']) {
      this.dataSource.data = this.users;
      if (this.paginator) {
        this.paginator.length = this.users.length;
      }
    }

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.users;
  }

}
