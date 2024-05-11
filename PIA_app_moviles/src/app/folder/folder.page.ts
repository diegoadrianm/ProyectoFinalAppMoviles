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

  sesionIniciada: boolean = false;


  contactos: Contacto[] = this.listaContactos.contactos;

  
  setOpen(state: boolean) {
    this.isModalOpen.isOpen = state;  
  }
  

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: InicioSesionComponent,
    });

    modal.present();
  }
}
