import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../Interfaces/Usuario';
import { IonModal, ModalController } from '@ionic/angular';
import RegistroComponent from '../registro/registro.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent  implements OnInit {

  formLogin: FormGroup;

  constructor(private modalCtrl: ModalController, private auth: AuthService, private formBuilder: FormBuilder) {

    this.formLogin =  this.formBuilder.group({
      email: new FormControl(), 
      password: new FormControl()
    })
  }



  ngOnInit() {}

  @ViewChild(IonModal)
  modal!: IonModal;
  
  nuevoUsuario: Usuario = {
    contrasenia: '',
    email: '',
  } 

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  onSubmit(){
    this.auth.login(this.formLogin.value)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error))

    alert("Has iniciado sesion exitosamente exitosamente");

    return this.modalCtrl.dismiss(null, '');  
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
