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
const FAV = 'Favoritos' 
@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor() { }

  private _firestore = inject(Firestore)
  private _auth = inject(Auth);
  private _collection = collection(this._firestore, PATH);
  private _fav_collection = collection(this._firestore, FAV)

  contactos: Contacto[] = [];   
  favoritos: Contacto[] = [];

  //Obtener UID del usuario
  private getUserUID(): string | null{
    const user = this._auth.currentUser;
    return user ? user.uid : null;
  }

  agregarFavoritos(contacto: Contacto): Promise<DocumentReference<Contacto>> {
    this.favoritos.push(contacto);

    const uid = this.getUserUID();
    if (!uid) {
      throw new Error("Usuario no autenticado");
    }

    const contactWithUID = { ...contacto, uid };
    return addDoc(this._fav_collection, contactWithUID) as Promise<DocumentReference<Contacto>>;
    
  }

  getFavs() {
    const uid = this.getUserUID();
    if(!uid){
      throw new Error ("Usuario no autenticado");
    }

    const contactsQuery = query(this._fav_collection, where('uid', '==', uid));
    const q = query(this._fav_collection);
    return collectionData(contactsQuery, {idField: 'id'}) as Observable<Contact[]>;
  }

  eliminarFavoritos(id: string){
    const documentRef = doc(this._firestore, FAV, id);
    alert("Se ha eliminado correctamente")
    return deleteDoc(documentRef);
  }

  getContacts(): Observable<Contact[]> {
    const uid = this.getUserUID();
    if(!uid){
      throw new Error ("Usuario no autenticado");
    }

    const contactsQuery = query(this._collection, where('uid', '==', uid));
    const q = query(this._collection);
    return collectionData(contactsQuery, {idField: 'id'}) as Observable<Contact[]>;
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
    alert("Se ha eliminado correctamente")

    const documentRef2 = doc(this._firestore, FAV, id);
    deleteDoc(documentRef2);
    return deleteDoc(documentRef);

  
  }
  

 


}
