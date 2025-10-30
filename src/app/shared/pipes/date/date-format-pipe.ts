import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: false
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date | string): string {
    if (!value) return '';

    // Convertimos a objeto Date
    const fecha = new Date(value);

    // Opciones de formato (en español)
    const opciones: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };

    // Retorna la fecha formateada
    return fecha.toLocaleDateString('es-ES', opciones);
  }

}
