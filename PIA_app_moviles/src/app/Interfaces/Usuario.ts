import { Contacto } from "./Contacto";

export interface Usuario {
    usuario: string,
    contrasenia: string,
    contactos: Contacto[]
}