import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../utils/constants';
import { User } from './model/User';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = `${API_URL}/users`;
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  private loadUsers() {
    this.http.get<User[]>(this.usersUrl).subscribe(users => {
      this.usersSubject.next(users);
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id: number | string): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  createUser(user: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(this.usersUrl, {
      ...user,
      createdAt: new Date().toISOString()
    }).pipe(
      tap(() => this.loadUsers())
    );
  }

  updateUser(id: number | string, user: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.usersUrl}/${id}`, user).pipe(
      tap(() => this.loadUsers())
    );
  }

  deleteUser(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.usersUrl}/${id}`).pipe(
      tap(() => this.loadUsers())
    );
  }

  getUsersForEffect(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}

// Añadir el import de tap
import { tap } from 'rxjs/operators';