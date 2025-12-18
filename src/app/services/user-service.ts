import { Injectable } from '@angular/core';
import { User } from '../users/interface/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersSubjec = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubjec.asObservable();
  
  userEdit = new BehaviorSubject<User | null>(null);
  userEdit$ = this.userEdit.asObservable();

  usersList: User[] = [
      { id: 1, nombre: 'juan', rol: 'admin', email: 'juan@example.com' },
      { id: 2, nombre: 'bob', rol: 'user', email: 'bob@example.com' },
      { id: 3, nombre: 'charlie', rol: 'user', email: 'charlie@example.com' },
      { id: 4, nombre: 'ana', rol: 'admin', email: 'ana@dd.com'},
      { id: 5, nombre: 'luis', rol: 'user', email: 'luis@example.com' },
      { id: 6, nombre: 'marta', rol: 'admin', email: 'marta@example.com' },
      { id: 7, nombre: 'sofia', rol: 'user', email: 'sofia@example.com' },
      { id: 8, nombre: 'diego', rol: 'user', email: 'diego@example.com' },
      { id: 9, nombre: 'lucia', rol: 'user', email: 'lucia@example.com' }
    ];

    getUsers(){
      this.usersSubjec.next([...this.usersList]);
    }
    
    addUser(user: User){
      this.usersList.push({
        ... user,
        id: this.usersList[this.usersList.length-1].id+1,
      });

      this.usersSubjec.next([...this.usersList])
    }

    setUpdateUser(id: number){
      this.userEdit.next(this.usersList.find((u)=>u.id === id) || null);
    }

    updateUser(id: number, data: User){
      let index=this.usersList.findIndex((u)=>u.id===id);

      if(index === -1){
        return undefined;
      }

      this.usersList[index]={
        ... this.usersList[index],
        ... data
      };

      this.usersSubjec.next([...this.usersList]);
    }

    deleteUser(id:number){
      this.usersList=this.usersList.filter((u)=>u.id!==id)
      this.usersSubjec.next([...this.usersList]);
    }
}
