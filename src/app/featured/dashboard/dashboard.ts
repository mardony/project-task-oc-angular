
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth';
import { RootState } from '../../core/store';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUser } from '../../core/store/auth/auth.selector';
import { Role } from '../../core/services/users/model/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: false
})
export class Dashboard implements OnInit {
  user$: Observable<any>;
  menuItems: any[] = [];

  constructor(private authService: AuthService, private store: Store<RootState>) {
    this.user$ = this.store.select(selectUser);
  }

  ngOnInit() {
    this.user$.subscribe(user => {
      this.buildMenuItems(user);
    });
  }

  private buildMenuItems(user: any) {
    const baseItems = [
      {
        name: 'Inicio',
        icon: 'home',
        url: '/dashboard',
        visible: true
      },
      {
        name: 'Cursos',
        icon: 'school',
        url: 'courses',
        visible: true
      },
      {
        name: 'Alumnos',
        icon: 'groups',
        url: 'students',
        visible: true
      },
      {
        name: 'Inscripciones',
        icon: 'assignment',
        url: 'inscriptions',
        visible: true  // TODOS pueden ver inscripciones
      }
    ];

    // Solo ADMIN ve usuarios
    if (user?.role === Role.ADMIN) {
      baseItems.push({
        name: 'Usuarios',
        icon: 'people',
        url: 'users',
        visible: true
      });
    }

    this.menuItems = baseItems;
  }

  logout() {
    this.authService.logout();
  }
}