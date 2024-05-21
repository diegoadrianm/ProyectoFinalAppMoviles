import { Component, OnInit } from '@angular/core';
import { Contacto } from '../Interfaces/Contacto';
import { ContactosService } from '../services/contactos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  constructor(private listaContacto: ContactosService) { }

  ngOnInit() {
    this.favoritos = this.listaContacto.favoritos;
  }

  favoritos: Contacto[] = [];

  eliminarFavoritos(contacto: Contacto){
      this.listaContacto.eliminarFavoritos(contacto);
      alert("Se ha eliminado de favoritos")
    }
}
