import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing-module';
import { Students } from './students';
import { StudentTable } from './student-table/student-table';
import { StudentForm } from './student-form/student-form';
import { StudentDetail } from './student-detail/student-detail';
import { SharedModule } from '../../../shared/shared-module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { studentsFeature } from './store/students.reducer';
import { StudentsEffects } from './store/students.effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    Students,
    StudentTable,
    StudentForm,
    StudentDetail
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    // VERIFICA que esta línea esté presente y correcta:
    StoreModule.forFeature(studentsFeature),
    EffectsModule.forFeature([StudentsEffects]),
    MatProgressSpinnerModule
  ]
})
export class StudentsModule { }