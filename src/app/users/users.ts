import { Component } from '@angular/core';
import { User } from './interface/user';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  users: User[] = [
    { id: 1, nombre: 'juan', rol: 'admin', email: 'juan@example.com' },
    { id: 2, nombre: 'bob', rol: 'user', email: 'bob@example.com' },
    { id: 3, nombre: 'charlie', rol: 'user', email: 'charlie@example.com' },
    { id: 4, nombre: 'ana', rol: 'moderator', email: 'ana@dd.com'},
    { id: 5, nombre: 'luis', rol: 'user', email: 'luis@example.com' },
    { id: 6, nombre: 'marta', rol: 'admin', email: 'marta@example.com' },
    { id: 7, nombre: 'sofia', rol: 'user', email: 'sofia@example.com' },
    { id: 8, nombre: 'diego', rol: 'moderator', email: 'diego@example.com' },
    { id: 9, nombre: 'lucia', rol: 'user', email: 'lucia@example.com' }
  ];


  onAddUser(user: User) {
    console.log('Nuevo usuario agregado:', user);

    const newUser= {
      ...user,
      id: this.users.length >0? this.users[this.users.length -1].id +1 : 1
    };
    this.users = [...this.users, newUser];
  }
}
