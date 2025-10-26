import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from '../../interface/proyecto';

@Component({
  selector: 'app-proyecto-form',
  standalone: false,
  templateUrl: './proyecto-form.html',
  styleUrl: './proyecto-form.css'
})
export class ProyectoForm {
  public proyectoForm: FormGroup;

  @Output() sendProyecto = new EventEmitter<Proyecto>();

  constructor(private fb: FormBuilder) {
    this.proyectoForm = this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(250)]],
      descripcion: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      estado: ['',[Validators.required]]
    });
  }

  onSubmit() {
    if (this.proyectoForm.valid) {
      this.sendProyecto.emit(this.proyectoForm.value);
      this.proyectoForm.reset();
    }
  }
  get isNombreInvalid() {
    return this.proyectoForm.controls['nombre'].dirty && this.proyectoForm.controls['nombre'].invalid;
  }
  get isDescripcionInvalid() {
    return this.proyectoForm.controls['descripcion'].dirty && this.proyectoForm.controls['descripcion'].invalid;
  }
  get isEstadoInvalid() {
    return this.proyectoForm.controls['estado'].dirty && this.proyectoForm.controls['estado'].invalid;
  }
}
