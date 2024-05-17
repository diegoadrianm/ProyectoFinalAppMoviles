import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../Interfaces/Usuario';
import { IonModal, ModalController } from '@ionic/angular';
import RegistroComponent from '../registro/registro.component';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  @ViewChild(IonModal)
  modal!: IonModal;
  
  nuevoUsuario: Usuario = {
    usuario: '',
    contrasenia: '',
    email: '',
    contactos: []
  } 

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(null, '');  }

    async openModal() {
      const modal = await this.modalCtrl.create({
        component: RegistroComponent,
      });
  
      modal.present();
      this.modalCtrl.dismiss();
    }  

}
