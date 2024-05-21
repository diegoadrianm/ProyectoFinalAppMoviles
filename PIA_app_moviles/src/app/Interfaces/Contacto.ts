import { FotoPerfil } from "./FotoPerfil";

export interface Contact extends Contacto{
    id: string;
}

export interface Contacto{
    nombre: string,
    primerApellido: string,
    segundoApellido: string,
    numeroCel?: number,
    fotoPerfil?:  FotoPerfil
}

