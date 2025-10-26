import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPersonal } from '../../interface/ipersonal';

@Component({
  selector: 'app-personal-campo-form',
  standalone: false,
  templateUrl: './personal-campo-form.html',
  styleUrl: './personal-campo-form.css'
})
export class PersonalCampoForm {
  public personalForm: FormGroup;

  @Output() sendPersonal = new EventEmitter<IPersonal>();

  constructor(private fb: FormBuilder) {
    this.personalForm = this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      apellido: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      puesto: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['',[Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.personalForm.invalid) {
      alert('Los campos deben ser validos');
      return;
    }
    this.sendPersonal.emit(this.personalForm.value);
  }

  get isNombreInvalid() {
    return this.personalForm.controls['nombre'].dirty && this.personalForm.controls['nombre'].invalid;
  }
  get isApellidoInvalid() {
    return this.personalForm.controls['apellido'].dirty && this.personalForm.controls['apellido'].invalid;
  }
  get isPuestoInvalid() {
    return this.personalForm.controls['puesto'].dirty && this.personalForm.controls['puesto'].invalid;
  }
  get isEmailInvalid() {
    return this.personalForm.controls['email'].dirty && this.personalForm.controls['email'].invalid;
  }

}
