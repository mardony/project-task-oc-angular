import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Users } from './users';
import { UserTable } from './user-table/user-table';
import { UserForm } from './user-form/user-form';
import { roleGuard } from '../../../core/guards/role/role-guard';

const routes: Routes = [
  {
    path: '',
    component: Users,
    canActivate: [roleGuard(['ADMIN'])],
    children: [
      {
        path: '',
        component: UserTable,
      },
      {
        path: 'create',
        component: UserForm,
      },
      {
        path: 'edit/:id',
        component: UserForm,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}