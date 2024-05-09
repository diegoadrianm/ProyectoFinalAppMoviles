import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"pia-appmoviles-bfb3a","appId":"1:334001649967:web:c16fd0c8ef459530ac89da","storageBucket":"pia-appmoviles-bfb3a.appspot.com","apiKey":"AIzaSyDZLgTbVdKBQD6eHSGQBSBbLulMcb9ltog","authDomain":"pia-appmoviles-bfb3a.firebaseapp.com","messagingSenderId":"334001649967"})), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
