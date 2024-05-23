import { Component, OnInit, inject, output } from '@angular/core';
import { Contacto } from '../Interfaces/Contacto';
import { ModalController } from '@ionic/angular';
import { MaskitoOptions, MaskitoElementPredicate } from '@maskito/core';
import { ContactosService } from '../services/contactos.service';
import { OpenModalService } from '../services/open-modal.service';
import { Input } from '@angular/core';
import { Contact } from '../Interfaces/Contacto';

@Component({
  selector: 'app-agregar-contacto',
  templateUrl: './agregar-contacto.component.html',
  styleUrls: ['./agregar-contacto.component.scss'],
})
export class AgregarContactoComponent  implements OnInit {

  constructor(private modalCtrl: ModalController, private contacto: ContactosService, public isModalOpen: OpenModalService) { }

  private _contactService = inject(ContactosService);

  ngOnInit() {}


  formData: Contacto = {
    nombre: '',
    primerApellido: '',
    segundoApellido:'',
  }
  
  cancel() {
    this.isModalOpen.isOpen=false;
  }

  nuevoContacto: Contacto = {
    nombre: '',
    primerApellido: '',
    segundoApellido:'',
  }

  async onSubmit() {

    this.nuevoContacto = {
    nombre: this.formData.nombre,
    primerApellido: this.formData.primerApellido,
    segundoApellido: this.formData.segundoApellido,
    numeroCel: this.formData.numeroCel,

    };

    try{
      await this._contactService.createContact(this.nuevoContacto);
    }
    catch(error){

    }

    
    this.isModalOpen.isOpen=false;
  };



}
