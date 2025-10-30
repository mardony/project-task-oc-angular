import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from '../../interface/alumno';


@Component({
  selector: 'app-alumno-form',
  standalone: false,
  templateUrl: './alumno-form.html',
  styleUrl: './alumno-form.css'
})
export class AlumnoForm {
  public alumnoForm: FormGroup;

  @Output() sendAlumno = new EventEmitter<Alumno>();

  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
      nombre: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(35)]],
      apellidoPaterno: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(38)]],
      apellidoMaterno: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(35)]],
      dni: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
      email: ['',[Validators.required,Validators.email]],
      fechaNacimiento: ['',[Validators.required]]
    });
  }

  onSubmit() {
    if (this.alumnoForm.valid) {
      return;
    }

    this.sendAlumno.emit(this.alumnoForm.value);
  }
  get isNombreInvalid(){
    return this.alumnoForm.controls['nombre'].dirty && this.alumnoForm.controls['nombre'].invalid;
  }

  get isApellidoPaternoInvalid(){
    return this.alumnoForm.controls['apellidoPaterno'].dirty && this.alumnoForm.controls['apellidoPaterno'].invalid;
  }

  get isApellidoMaternoInvalid(){
    return this.alumnoForm.controls['apellidoMaterno'].dirty && this.alumnoForm.controls['apellidoMaterno'].invalid;
  }

  get isDniInvalid(){
    return this.alumnoForm.controls['dni'].dirty && this.alumnoForm.controls['dni'].invalid;
  }
  get isEmailInvalid() {
    return this.alumnoForm.controls['email'].dirty && this.alumnoForm.controls['email'].invalid;
  }
  get isFechaNacimientoInvalid() {
    return this.alumnoForm.controls['fechaNacimiento'].dirty && this.alumnoForm.controls['fechaNacimiento'].invalid;
  }
}
