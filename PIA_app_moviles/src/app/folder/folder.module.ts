import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { AgregarContactoComponent } from '../agregar-contacto/agregar-contacto.component';
import { MaskitoModule } from '@maskito/angular';
import RegistroComponent from '../registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    MaskitoModule,
    ReactiveFormsModule
  ],
  declarations: [FolderPage, AgregarContactoComponent, RegistroComponent, InicioSesionComponent]
})
export class FolderPageModule {}
