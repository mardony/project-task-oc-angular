
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../../../core/services/users/model/User';

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    'Load Users': emptyProps(),
    'Load Users Success': props<{ users: User[] }>(),
    'Load Users Failure': props<{ error: any }>(),
    'Create User': props<{ user: Omit<User, 'id'> }>(),
    'Create User Success': props<{ user: User }>(),
    'Create User Failure': props<{ error: any }>(),
    'Update User': props<{ id: string | number, user: Partial<User> }>(),
    'Update User Success': props<{ user: User }>(),
    'Update User Failure': props<{ error: any }>(),
    'Delete User': props<{ id: string | number }>(),
    'Delete User Success': props<{ id: string | number }>(),
    'Delete User Failure': props<{ error: any }>()
  }
});