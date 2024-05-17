import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { AgregarContactoComponent } from '../agregar-contacto/agregar-contacto.component';
import { MaskitoModule } from '@maskito/angular';
import RegistroComponent from '../registro/registro.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    MaskitoModule
  ],
  declarations: [FolderPage, AgregarContactoComponent, RegistroComponent]
})
export class FolderPageModule {}
