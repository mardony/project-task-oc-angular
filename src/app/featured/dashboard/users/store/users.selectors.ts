import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersFeatureKey, UsersState } from './users.reducer';

const selectUsersState = createFeatureSelector<UsersState>(usersFeatureKey);

export const selectUsers = createSelector(
  selectUsersState,
  (state: UsersState) => state.users
);

export const selectIsLoading = createSelector(
  selectUsersState,
  (state: UsersState) => state.isLoading
);

export const selectError = createSelector(
  selectUsersState,
  (state: UsersState) => state.error
);

export const selectUserById = (id: string | number) => createSelector(
  selectUsers,
  (users) => users.find(user => user.id.toString() === id.toString())
);