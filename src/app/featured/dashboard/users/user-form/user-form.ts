import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User, Role } from '../../../../core/services/users/model/User';
import { UsersActions } from '../store/users.actions';
import { selectUserById } from '../store/users.selectors';
import { RootState } from '../../../../core/store';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
  standalone: false
})
export class UserForm implements OnInit {

  userForm: FormGroup;
  userId: string | null = null;
  isEditing = false;
  isLoading = false;
  user$: Observable<User | undefined>;
  showPassword = false;

  roleOptions = [
    { value: Role.ADMIN, label: 'Administrador' },
    { value: Role.USER, label: 'Usuario' }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<RootState>
  ) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      fullName: [''],
      phone: [''],
      address: [''],
      role: [Role.USER, Validators.required]
    });

    // Inicialización correcta (sin valores ficticios)
    this.user$ = new Observable<User | undefined>();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      if (id) {
        this.userId = id;
        this.isEditing = true;

        // Actualizar validaciones de password en edición
        const passwordControl = this.userForm.get('password');
        passwordControl?.clearValidators();
        passwordControl?.updateValueAndValidity();

        this.user$ = this.store.select(selectUserById(id));

        this.user$.subscribe(user => {
          if (user) {
            const { password, ...userData } = user;
            this.userForm.patchValue(userData);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.markFormGroupTouched(this.userForm);
      return;
    }

    this.isLoading = true;
    const userData = { ...this.userForm.value };

    // En edición, no enviar password vacío
    if (this.isEditing && !userData.password) {
      delete userData.password;
    }

    if (this.isEditing && this.userId) {
      this.store.dispatch(
        UsersActions.updateUser({
          id: this.userId,
          user: userData
        })
      );
    } else {
      this.store.dispatch(
        UsersActions.createUser({
          user: userData
        })
      );
    }

    this.isLoading = false;
    this.router.navigate(['dashboard', 'users']);
  }

  onCancel(): void {
    this.router.navigate(['dashboard', 'users']);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
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
    const control = this.userForm.get(controlName);
    return !!(control?.touched && control?.hasError(errorName));
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.userForm.get(controlName);

    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }

    if (control?.hasError('minlength')) {
      return `Mínimo ${control.errors?.['minlength'].requiredLength} caracteres`;
    }

    if (control?.hasError('email')) {
      return 'Email inválido';
    }

    return null;
  }
}
