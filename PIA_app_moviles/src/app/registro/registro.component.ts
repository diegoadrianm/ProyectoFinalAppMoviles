import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from '../Interfaces/Usuario';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,} from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export default class RegistroComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  firebaseConfig = {
    projectId:"pia-appmoviles-bfb3a",
    appId:"1:334001649967:web:c16fd0c8ef459530ac89da",
    storageBucket:"pia-appmoviles-bfb3a.appspot.com",
    apiKey:"AIzaSyDZLgTbVdKBQD6eHSGQBSBbLulMcb9ltog",
    authDomain:"pia-appmoviles-bfb3a.firebaseapp.com",
    messagingSenderId:"334001649967"
    //la declaracion la moví aqui en lugar de en imports
  }
  
  app = initializeApp(this.firebaseConfig); //inicializa la app
  db = getFirestore(this.app); //accede a la instancia de la app
  
  auth = getAuth(this.app);

  nuevoUsuario: Usuario = {
    usuario: '',
    contrasenia: '',
    email: '',
    contactos: []
  } 

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  submit() {
    /*createUserWithEmailAndPassword(this.auth, this.nuevoUsuario.email, this.nuevoUsuario.contrasenia)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // .. 
      console.log(errorCode, errorMessage);
    });*/

    console.log(this.nuevoUsuario.email)
    alert('que pedo');//aun no queda, marca un error

    return this.modalCtrl.dismiss(null, '');  
  }
 
  
  
  
}
