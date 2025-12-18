import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { User } from '../../interface/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from '../../../services/user-service';


@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  @Input() users: User[] = [];
  
  displayedColumns: string[] = ['id', 'nombre', 'rol', 'email','acciones'];
  dataSource = new MatTableDataSource<User>();


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService){
    this.userService.users$.subscribe((users)=>{
      this.dataSource.data = users;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.userService.getUsers();
  }


  onEditUser(id: number){
    this.userService.setUpdateUser(id);
  }

  onDeleteUser(id: number){
    this.userService.deleteUser(id);
  }

}
