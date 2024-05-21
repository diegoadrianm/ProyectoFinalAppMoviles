import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Usuario } from '../Interfaces/Usuario';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { Contacto } from '../Interfaces/Contacto';
import { AgregarContactoComponent } from '../agregar-contacto/agregar-contacto.component';
import { ContactosService } from '../services/contactos.service';
import { OpenModalService } from '../services/open-modal.service';
import { tap } from 'rxjs';
import { Contact } from '../Interfaces/Contacto';




@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private modalCtrl: ModalController,private listaContactos: ContactosService, public isModalOpen: OpenModalService) {}


  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  contactos: Contact[] = [];
  favoritos: Contacto[] = this.listaContactos.favoritos;

  private _ContactosService = inject(ContactosService)
  contacts$ = this._ContactosService.getContacts().pipe(tap(values => console.log(values)));

  setOpen(state: boolean) {
    this.isModalOpen.isOpen = state;  
  }

  sesionIniciada: boolean = false;

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: InicioSesionComponent,
    });

    modal.present();
  }

  async deleteContact(id: string){
    try{
      await this._ContactosService.deleteContact(id);
    }
    catch(error){}
  }



  agregarFavoritos(contacto: Contacto){
    this.listaContactos.agregarFavoritos(contacto);
    alert("Has agregado a un contacto a favoritos");
  }
}
