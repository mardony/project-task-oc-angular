import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../interface/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm {
  public userForm: FormGroup;

  //Output
  @Output() sendUser = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      rol: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit(){
    if(this.userForm.invalid){
      alert('Los campos deben ser validos');
      return;
    }
    this.sendUser.emit(this.userForm.value);
  }

  get isNameInvalid(){
    return this.userForm.controls['nombre'].dirty && this.userForm.controls['nombre'].invalid;
  }
  get isRolInvalid() {
    return this.userForm.controls['rol'].dirty && this.userForm.controls['rol'].invalid;
  }
  get isEmailInvalid() {
    return this.userForm.controls['email'].dirty && this.userForm.controls['email'].invalid;
  }
}
