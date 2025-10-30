export interface Alumno {
    id: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    dni: string;
    email?: string;
    fechaNacimiento: Date;
}
