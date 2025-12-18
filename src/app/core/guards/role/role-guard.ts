import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { selectUser } from '../../store/auth/auth.selector';
import { RootState } from '../../store';

export const roleGuard = (allowedRoles: string[]): CanActivateFn => {
  return (route, state) => {
    const store = inject(Store<RootState>);
    const router = inject(Router);
    
    return store.select(selectUser).pipe(
      take(1),
      map(user => {
        if (!user) {
          router.navigate(['/login']);
          return false;
        }
        
        if (allowedRoles.includes(user.role)) {
          return true;
        } else {
          router.navigate(['/dashboard']);
          return false;
        }
      })
    );
  };
};