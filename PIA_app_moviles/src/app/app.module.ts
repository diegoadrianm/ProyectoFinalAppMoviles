import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
//import { getFirestore, provideFirestore } from '@angular/fire/firestore'; **No supe de donde se instalaban las de abajo vienen en la documentacion
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,} from 'firebase/firestore/lite';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';


@NgModule({
  declarations: [AppComponent, InicioSesionComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

const firebaseConfig = {
  projectId:"pia-appmoviles-bfb3a",
  appId:"1:334001649967:web:c16fd0c8ef459530ac89da",
  storageBucket:"pia-appmoviles-bfb3a.appspot.com",
  apiKey:"AIzaSyDZLgTbVdKBQD6eHSGQBSBbLulMcb9ltog",
  authDomain:"pia-appmoviles-bfb3a.firebaseapp.com",
  messagingSenderId:"334001649967"
  //la declaracion la moví aqui en lugar de en imports
}

const app = initializeApp(firebaseConfig); //inicializa la app
const db = getFirestore(app); //accede a la instancia de la app
