import { Injectable } from '@angular/core';
import { Contacto } from '../Interfaces/Contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor() { }

  contactos: Contacto[] = [];


  agregarContactos(contactoNuevo: Contacto){

    this.contactos.push(contactoNuevo);
    console.log(contactoNuevo);
    console.log('hola');
  }

  eliminarContacto(contacto: Contacto){
    let position: number = this.contactos.indexOf(contacto)
    this.contactos.splice(position,1);
  }
}
