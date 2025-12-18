import { Component } from '@angular/core';
import { User } from './interface/user';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {

  
  usersList: User[]=[]
  userToEdit: User|null = null

  constructor(private userService: UserService){}
  
  onAddUser(user: User) {
    this.userService.addUser(user);
  }

  onEditUser(user: User){
    this.userToEdit = user;
  }

  onEditRecieved(user: User){
    let response = this.userService.updateUser(user.id, user);

    if(response){
      this.userToEdit=null;
    }
    
  }
}
