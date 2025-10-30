import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from '../../interface/curso';

@Component({
  selector: 'app-curso-form',
  standalone: false,
  templateUrl: './curso-form.html',
  styleUrl: './curso-form.css'
})
export class CursoForm {
  public cursoForm: FormGroup;

  @Output() sendCurso = new EventEmitter<Curso>();

  constructor(private fb: FormBuilder){
    this.cursoForm = this.fb.group({
      asignatura: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(500)]],
      fechaInicio: ['',[Validators.required]],
      fechaFin: ['', [Validators.required]]
    })
  }

  onSubmit(){
    if(this.cursoForm.invalid){
      alert('Los campos deben ser validos');
      return;
    }
    this.sendCurso.emit(this.cursoForm.value);
  }

  get isAsignaturaInvalid() {
    return this.cursoForm.controls['asignatura'].dirty && this.cursoForm.controls['asignatura'].invalid;
  }
  get isDescripcionInvalid() {
    return this.cursoForm.controls['descripcion'].dirty && this.cursoForm.controls['descripcion'].invalid;
  }
  get isFechaInicioInvalid() {
    return this.cursoForm.controls['fechaInicio'].dirty && this.cursoForm.controls['fechaInicio'].invalid;
  }
  get isFechaFinInvalid() {
    return this.cursoForm.controls['fechaFin'].dirty && this.cursoForm.controls['fechaFin'].invalid;
  }
}
