import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Students } from './students';
import { StudentTable } from './student-table/student-table';
import { StudentForm } from './student-form/student-form';
import { StudentDetail } from './student-detail/student-detail';

const routes: Routes = [
  {
    path: '',
    component: Students,
    children: [
      {
        path: '',
        component: StudentTable,
      },
      {
        path: 'create',
        component: StudentForm,
      },
      {
        path: 'edit/:id',
        component: StudentForm,
      },
      {
        path: 'detail/:id',
        component: StudentDetail,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}