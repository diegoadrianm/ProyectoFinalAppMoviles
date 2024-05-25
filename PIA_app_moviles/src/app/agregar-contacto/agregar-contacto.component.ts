import { Component, OnInit, inject, output } from '@angular/core';
import { Contacto } from '../Interfaces/Contacto';
import { ModalController } from '@ionic/angular';
import { ContactosService } from '../services/contactos.service';
import { OpenModalService } from '../services/open-modal.service';
import { Input } from '@angular/core';
import { Contact } from '../Interfaces/Contacto';
import { FotoService } from '../services/foto.service';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { ref, uploadBytes } from '@angular/fire/storage';

@Component({
  selector: 'app-agregar-contacto',
  templateUrl: './agregar-contacto.component.html',
  styleUrls: ['./agregar-contacto.component.scss'],
})
export class AgregarContactoComponent  implements OnInit {

  constructor(private modalCtrl: ModalController, 
    private contacto: ContactosService, 
    public isModalOpen: OpenModalService, 
    public foto: FotoService) { }

  private _contactService = inject(ContactosService);

  ngOnInit() {}


  ruta: string = ''
  formData: Contacto = {
    nombre: '',
    primerApellido: '',
    segundoApellido:'',
    filepath:''
  }
  
  cancel() {
    this.isModalOpen.isOpen=false;
  }

  nuevoContacto: Contacto = {
    nombre: '',
    primerApellido: '',
    segundoApellido:'',
    filepath:''
  }

  async tomarFoto() {
 
    this.ruta = await this.foto.uploadImage(await this.foto.addFoto()) 
    
  }

  async onSubmit() {

    this.nuevoContacto = {
    nombre: this.formData.nombre,
    primerApellido: this.formData.primerApellido,
    segundoApellido: this.formData.segundoApellido,
    numeroCel: this.formData.numeroCel,
    filepath: this.ruta,
    };

    try{
      await this._contactService.createContact(this.nuevoContacto);
    }
    catch(error){

    }

    console.log('como estas')
    this.isModalOpen.isOpen=false;
  };

  

}
