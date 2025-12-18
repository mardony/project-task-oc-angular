import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map, startWith } from 'rxjs';

import { Student } from '../../../../core/services/students/model/Student';
import { Course, CourseStatus } from '../../../../core/services/courses/model/Course';
import { RootState } from '../../../../core/store';
import { selectStudents } from '../../students/store/students.selectors';
import { selectCourses } from '../../courses/store/courses.selectors';
import { StudentsActions } from '../../students/store/students.actions';
import { CoursesActions } from '../../courses/store/courses.actions';
import { InscriptionsActions } from '../store/inscriptions.actions';
import { AuthService } from '../../../../core/services/auth/auth';
import { selectIsLoading } from '../store/inscriptions.selectors';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.html',
  styleUrl: './inscription-form.css',
  standalone: false
})
export class InscriptionForm implements OnInit {

  inscriptionForm: FormGroup;

  students$: Observable<Student[]>;
  courses$: Observable<Course[]>;

  selectedStudentName$!: Observable<string>;
  selectedCourseTitle$!: Observable<string>;

  currentUser: any;
  currentDate: Date = new Date();
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<RootState>,
    private authService: AuthService,
    private router: Router
  ) {
    this.inscriptionForm = this.fb.group({
      studentId: ['', Validators.required],
      courseId: ['', Validators.required]
    });

    this.students$ = this.store.select(selectStudents);
    this.courses$ = this.store.select(selectCourses);

    this.authService.user$.subscribe(user => {
      this.currentUser = user;
    });

    // Escuchar estado de carga
    this.store.select(selectIsLoading).subscribe(isLoading => {
      if (!isLoading && this.isLoading) {
        this.isLoading = false;
        this.router.navigate(['dashboard', 'inscriptions']);
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(StudentsActions.loadStudents());
    this.store.dispatch(CoursesActions.loadCourses());

    this.selectedStudentName$ = combineLatest([
      this.students$,
      this.inscriptionForm.get('studentId')!.valueChanges.pipe(
        startWith(this.inscriptionForm.value.studentId)
      )
    ]).pipe(
      map(([students, studentId]) =>
        students.find(s => s.id.toString() === studentId?.toString())?.name
        ?? 'No seleccionado'
      )
    );

    this.selectedCourseTitle$ = combineLatest([
      this.courses$,
      this.inscriptionForm.get('courseId')!.valueChanges.pipe(
        startWith(this.inscriptionForm.value.courseId)
      )
    ]).pipe(
      map(([courses, courseId]) =>
        courses.find(c => c.id.toString() === courseId?.toString())?.title
        ?? 'No seleccionado'
      )
    );
  }

  onSubmit(): void {
    if (this.inscriptionForm.valid && this.currentUser) {
      this.isLoading = true;

      this.store.dispatch(
        InscriptionsActions.createInscription({
          inscription: {
            studentId: this.inscriptionForm.value.studentId,
            courseId: this.inscriptionForm.value.courseId,
            userId: this.currentUser.id,
            inscriptionDate: new Date() // ✅ FIX DEFINITIVO
          }
        })
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['dashboard', 'inscriptions']);
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.inscriptionForm.get(controlName);
    return !!(control?.touched && control.hasError(errorName));
  }

  getActiveCourses(courses: Course[]): Course[] {
    return courses.filter(course =>
      course.status !== CourseStatus.FINISHED &&
      course.status !== CourseStatus.CANCELLED
    );
  }
}