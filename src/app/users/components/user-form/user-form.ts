import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { User } from '../../interface/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user-service';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm {
  public userForm: FormGroup;

  isEditing: boolean = false;
  
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      id:[''],
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      rol: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.userService.userEdit$.subscribe((user)=>{
      if(user){
        this.userForm.patchValue({
          id: user.id,
          nombre: user.nombre,
          rol: user.rol,
          email: user.email,
        });
        this.isEditing = true;
      }else{
        this.isEditing = false;
        this.userForm.reset();
      }
    });
  }

  ngOnChanges(){}

  onSubmit(){
    if(this.userForm.invalid){
      alert('Los campos deben ser validos');
      return;
    }
    if (this.isEditing){
      this.userService.updateUser(this.userForm.value.id, this.userForm.value);
    } else{
      this.userService.addUser(this.userForm.value)
    }
    
    this.userForm.reset();
    this.isEditing = false;
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
