import { Injectable, inject } from '@angular/core';
import { Contacto } from '../Interfaces/Contacto';
import { Firestore,addDoc,collection,collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

const PATH = 'Contactos';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor() { }

  private _firestore = inject(Firestore)
  private _collection = collection(this._firestore, PATH);

  contactos: Contacto[] = [];   
  favoritos: Contacto[] = [];


 agregarContactos(contactoNuevo: Contacto){

    this.contactos.push(contactoNuevo);
    console.log(contactoNuevo);
    console.log('hola');
  }

  eliminarContacto(contacto: Contacto){
    let position: number = this.contactos.indexOf(contacto)
    this.contactos.splice(position,1);
  }

  agregarFavoritos(contacto: Contacto){
    this.favoritos.push(contacto);
  }

  eliminarFavoritos(contacto: Contacto){
    let position: number = this.favoritos.indexOf(contacto)
    this.favoritos.splice(position,1);
  }

  getContacts(){
    return collectionData(this._collection) as Observable<Contacto[]>;
  }


}
