import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Students } from './students';
import { StudentDetail } from './student-detail/student-detail';
import { StudentForm } from './student-form/student-form';

const routes: Routes = [
  {
    path: '',
    component: Students
  },
  {
    path: 'new',
    component: StudentForm
  },
  {
    path: 'edit/:id',
    component: StudentForm
  },
  {
    path: ':id',
    component: StudentDetail
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule {}
