import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student, StudentProfile } from '../../../../core/services/students/model/Student';
import { StudentsActions } from '../store/students.actions';
import { selectStudentById } from '../store/students.selectors';
import { RootState } from '../../../../core/store';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
  standalone: false
})
export class StudentForm implements OnInit {

  studentForm: FormGroup;
  studentId: string | null = null;
  isEditing = false;
  isLoading = false;
  student$: Observable<Student | undefined>;

  profileOptions = [
    { value: StudentProfile.DEVELOPER, label: 'Desarrollador' },
    { value: StudentProfile.IT, label: 'IT' },
    { value: StudentProfile.END_USER, label: 'Usuario Final' },
    { value: StudentProfile.OTHER, label: 'Otro' }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<RootState>
  ) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9\-\+]{9,15}$/)]],
      address: ['', Validators.required],
      profile: [StudentProfile.DEVELOPER, Validators.required]
    });

    // Inicialización correcta sin valores ficticios
    this.student$ = new Observable<Student | undefined>();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      if (id) {
        this.studentId = id;
        this.isEditing = true;

        this.student$ = this.store.select(selectStudentById(id));

        this.student$.subscribe(student => {
          if (student) {
            this.studentForm.patchValue(student);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.studentForm.invalid) {
      this.markFormGroupTouched(this.studentForm);
      return;
    }

    this.isLoading = true;

    if (this.isEditing && this.studentId) {
      this.store.dispatch(
        StudentsActions.updateStudent({
          id: this.studentId,
          student: this.studentForm.value
        })
      );
    } else {
      this.store.dispatch(
        StudentsActions.createStudent({
          student: this.studentForm.value
        })
      );
    }

    this.isLoading = false;
    this.router.navigate(['dashboard', 'students']);
  }

  onCancel(): void {
    this.router.navigate(['dashboard', 'students']);
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.studentForm.get(controlName);
    return !!(control?.touched && control?.hasError(errorName));
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.studentForm.get(controlName);

    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }

    if (control?.hasError('minlength')) {
      return `Mínimo ${control.errors?.['minlength'].requiredLength} caracteres`;
    }

    if (control?.hasError('email')) {
      return 'Email inválido';
    }

    if (control?.hasError('pattern')) {
      return 'Formato inválido';
    }

    return null;
  }
}
