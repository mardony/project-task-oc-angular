import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StudentsService } from '../../../../core/services/students/students';
import { StudentsActions } from './students.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class StudentsEffects {
  private actions$ = inject(Actions);
  private studentsService = inject(StudentsService);

  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentsActions.loadStudents),
      mergeMap(() =>
        this.studentsService.getStudentsForEffect().pipe(
          map(students => StudentsActions.loadStudentsSuccess({ students })),
          catchError(error => of(StudentsActions.loadStudentsFailure({ error })))
        )
      )
    )
  );

  createStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentsActions.createStudent),
      mergeMap(({ student }) =>
        this.studentsService.createStudent(student).pipe(
          map(newStudent => StudentsActions.createStudentSuccess({ student: newStudent })),
          catchError(error => of(StudentsActions.createStudentFailure({ error })))
        )
      )
    )
  );

  deleteStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentsActions.deleteStudent),
      mergeMap(({ id }) =>
        this.studentsService.deleteStudent(id).pipe(
          map(() => StudentsActions.deleteStudentSuccess({ id })),
          catchError(error => of(StudentsActions.deleteStudentFailure({ error })))
        )
      )
    )
  );
}