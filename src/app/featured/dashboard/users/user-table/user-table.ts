import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User, Role } from '../../../../core/services/users/model/User';
import { selectUsers, selectIsLoading } from '../store/users.selectors';
import { UsersActions } from '../store/users.actions';
import { RootState } from '../../../../core/store';
import { UsersService } from '../../../../core/services/users/users';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.html',
  styleUrl: './user-table.css',
  standalone: false
})
export class UserTable implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'username', 'email', 'fullName', 'role', 'actions'];
  dataSource = new MatTableDataSource<User>([]);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  users$: Observable<User[]>;
  isLoading$: Observable<boolean>;
  
  roleLabels: { [key in Role]: string } = {
    [Role.ADMIN]: 'Administrador',
    [Role.USER]: 'Usuario'
  };

  constructor(
    private store: Store<RootState>,
    private usersService: UsersService
  ) {
    this.users$ = this.store.select(selectUsers);
    this.isLoading$ = this.store.select(selectIsLoading);
  }
  
  ngOnInit() {
    this.store.dispatch(UsersActions.loadUsers());
    this.users$.subscribe({
      next: (users) => {
        this.dataSource.data = users;
      }
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  onDeleteUser(id: number | string) {
    if (confirm('¿Está seguro de eliminar este usuario?')) {
      this.store.dispatch(UsersActions.deleteUser({ id }));
    }
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  getRoleLabel(role: Role): string {
    return this.roleLabels[role] || role;
  }
  
  getRoleClass(role: Role): string {
    return role === Role.ADMIN ? 'role-admin' : 'role-user';
  }
}