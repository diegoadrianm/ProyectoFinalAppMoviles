import { Injectable, inject } from '@angular/core';
import { Contacto } from '../Interfaces/Contacto';
import { Contact } from '../Interfaces/Contacto';
import { DocumentReference, Firestore,addDoc,collection,collectionData, orderBy, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { doc } from '@angular/fire/firestore';
import { deleteDoc } from '@angular/fire/firestore';
import { getDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

const PATH = 'Contactos';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor() { }

  private _firestore = inject(Firestore)
  private _auth = inject(Auth);
  private _collection = collection(this._firestore, PATH);

  contactos: Contacto[] = [];   
  favoritos: Contacto[] = [];

  //Obtener UID del usuario
  private getUserUID(): string | null{
    const user = this._auth.currentUser;
    return user ? user.uid : null;
  }

  agregarFavoritos(contacto: Contacto){
    this.favoritos.push(contacto);
  }

  eliminarFavoritos(contacto: Contacto){
    let position: number = this.favoritos.indexOf(contacto)
    this.favoritos.splice(position,1);
  }

  getContacts(): Observable<Contact[]> {
    const uid = this.getUserUID();
    if(!uid){
      throw new Error ("Usuario no autenticado");
    }

    const contactsQuery = query(this._collection, where('uid', '==', uid));
    const q = query(this._collection, orderBy('nombre'));
    return collectionData(contactsQuery) as Observable<Contact[]>;
  }

  createContact(contacto: Contacto): Promise<DocumentReference<Contacto>> {
    const uid = this.getUserUID();
    if (!uid) {
      throw new Error("Usuario no autenticado");
    }

    const contactWithUID = { ...contacto, uid };
    return addDoc(this._collection, contactWithUID) as Promise<DocumentReference<Contacto>>;
  }

  deleteContact(id: string){
    const documentRef = doc(this._firestore, PATH, id);
    return deleteDoc(documentRef);
    alert("Se ha eliminado correctamente")

  }

 


}
