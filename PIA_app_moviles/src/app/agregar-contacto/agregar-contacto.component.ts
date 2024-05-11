import { Component, OnInit } from '@angular/core';
import { Contacto } from '../Interfaces/Contacto';
import { ModalController } from '@ionic/angular';
import { MaskitoOptions, MaskitoElementPredicate } from '@maskito/core';
import { ContactosService } from '../services/contactos.service';

@Component({
  selector: 'app-agregar-contacto',
  templateUrl: './agregar-contacto.component.html',
  styleUrls: ['./agregar-contacto.component.scss'],
})
export class AgregarContactoComponent  implements OnInit {

  constructor(private modalCtrl: ModalController, private contacto: ContactosService) { }

  ngOnInit() {}

  formData: Contacto = {
    nombre: '',
    primerApellido: '',
    segundoApellido:'',
  }
  
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  nuevoContacto: Contacto = {
    nombre: '',
    primerApellido: '',
    segundoApellido:'',
  }

  onSubmit() {

    this.nuevoContacto = {
      nombre: this.formData.nombre,
    primerApellido: this.formData.primerApellido,
    segundoApellido: this.formData.segundoApellido,
    numeroCel: this.formData.numeroCel
    };
   
   this.contacto.agregarContactos(this.nuevoContacto)
   

    this.formData.nombre = '';
    this.formData.primerApellido = '';
    this.formData.segundoApellido = '';
    this.formData.numeroCel = undefined;

    return this.modalCtrl.dismiss();      
  }

  readonly phoneMask: MaskitoOptions = {
    mask: ['+', '5', '2', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };
  //descargue npm install @maskito/core, npm install @maskito/phone y npm install @maskito/angular

  readonly maskPredicate: MaskitoElementPredicate = async (el) => (el as HTMLIonInputElement).getInputElement();

}
