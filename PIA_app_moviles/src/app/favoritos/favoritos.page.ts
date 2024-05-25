import { Component, OnInit, inject } from '@angular/core';
import { Contact, Contacto } from '../Interfaces/Contacto';
import { ContactosService } from '../services/contactos.service';
import { Observable, tap } from 'rxjs';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  constructor(private listaContacto: ContactosService, private auth: Auth) { }

  private _ContactosService = inject(ContactosService)
  public contactos$: Observable<Contact[]> | null = null;
  ngOnInit() {
    this.favoritos = this.listaContacto.favoritos;
    this.contactos$ = this._ContactosService.getFavs().pipe(tap(values => console.log(values)))
  
    
  }

  favoritos: Contacto[] = [];

 async eliminarFavoritos(id: string){
  try{
    await this._ContactosService.eliminarFavoritos(id);
    this.contactos$ = this._ContactosService.getContacts().pipe(tap(values => console.log(values)));
    alert("Has eliminado el contacto exitosamente de favoritos")
  }
  catch(error){}
    }
}
