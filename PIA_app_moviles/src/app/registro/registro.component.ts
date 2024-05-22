import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from '../Interfaces/Usuario';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,} from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../services/auth.service';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export default class RegistroComponent  implements OnInit {

  formReg: FormGroup;

  constructor(private modalCtrl: ModalController, private userService: AuthService, private formBuilder: FormBuilder) {

    this.formReg = this.formBuilder.group({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(){
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  onSubmit() {

    this.userService.register(this.formReg.value).then(response => {console.log(response)}).catch(error => console.log(error));

    alert("Te has registrado exitosamente");//aun no queda, marca un error

    return this.modalCtrl.dismiss(null, '');  
  }
 
  
  
  
}
