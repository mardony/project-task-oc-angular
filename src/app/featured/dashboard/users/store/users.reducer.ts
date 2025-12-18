import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../../../../core/services/users/model/User';
import { UsersActions } from './users.actions';

export const usersFeatureKey = 'users';

export interface UsersState {
  users: User[];
  isLoading: boolean;
  error: any;
}

export const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(UsersActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    isLoading: false
  })),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(UsersActions.createUser, (state) => ({
    ...state,
    isLoading: true
  })),
  on(UsersActions.createUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    isLoading: false
  })),
  on(UsersActions.createUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(UsersActions.deleteUser, (state) => ({
    ...state,
    isLoading: true
  })),
  on(UsersActions.deleteUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter(user => user.id !== id),
    isLoading: false
  })),
  on(UsersActions.deleteUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);

export const usersFeature = createFeature({
  name: usersFeatureKey,
  reducer,
});