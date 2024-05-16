import { Injectable } from '@angular/core';
import { Contacto } from '../Interfaces/Contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor() { }

  contactos: Contacto[] = [];

  favoritos: Contacto[] = []

  agregarContactos(contactoNuevo: Contacto){

    this.contactos.push(contactoNuevo);
    console.log(contactoNuevo);
    console.log('hola');
  }

  agregarFavorito(contactoFavorito: Contacto){
    this.favoritos.push(contactoFavorito);
  }
}
