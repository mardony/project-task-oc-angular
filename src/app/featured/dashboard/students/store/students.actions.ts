import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Student } from '../../../../core/services/students/model/Student';

export const StudentsActions = createActionGroup({
  source: 'Students',
  events: {
    'Load Students': emptyProps(),
    'Load Students Success': props<{ students: Student[] }>(),
    'Load Students Failure': props<{ error: any }>(),
    'Create Student': props<{ student: Omit<Student, 'id'> }>(),
    'Create Student Success': props<{ student: Student }>(),
    'Create Student Failure': props<{ error: any }>(),
    'Update Student': props<{ id: string | number, student: Partial<Student> }>(),
    'Update Student Success': props<{ student: Student }>(),
    'Update Student Failure': props<{ error: any }>(),
    'Delete Student': props<{ id: string | number }>(),
    'Delete Student Success': props<{ id: string | number }>(),
    'Delete Student Failure': props<{ error: any }>()
  }
});