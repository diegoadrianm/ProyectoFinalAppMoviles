import { Injectable, inject } from '@angular/core';
import { Contacto } from '../Interfaces/Contacto';
import { Contact } from '../Interfaces/Contacto';
import { Firestore,addDoc,collection,collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { doc } from '@angular/fire/firestore';
import { deleteDoc } from '@angular/fire/firestore';
import { getDoc } from '@angular/fire/firestore';

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



  agregarFavoritos(contacto: Contacto){
    this.favoritos.push(contacto);
  }

  eliminarFavoritos(contacto: Contacto){
    let position: number = this.favoritos.indexOf(contacto)
    this.favoritos.splice(position,1);
  }

  getContacts(): Observable<Contact[]> {
    return collectionData(this._collection, { idField: 'id' }) as Observable<Contact[]>;
  }

  createContact(contacto: Contacto){
    return addDoc(this._collection, contacto)
  }

  deleteContact(id: string){
    const documentRef = doc(this._firestore, PATH, id);
    return deleteDoc(documentRef);
    alert("Se ha eliminado correctamente")

  }

 


}
