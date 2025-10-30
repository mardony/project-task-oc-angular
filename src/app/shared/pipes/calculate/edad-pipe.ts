import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edad',
  standalone: false
})
export class EdadPipe implements PipeTransform {

  transform(fechaNacimiento: Date | string): number {
    if (!fechaNacimiento) return 0;

    const fecha = new Date(fechaNacimiento);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();

    // Ajuste si aún no ha cumplido años este mes
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
      edad--;
    }

    return edad;
  }

}
