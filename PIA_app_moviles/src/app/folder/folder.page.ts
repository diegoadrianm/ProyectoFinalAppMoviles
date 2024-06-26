import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Usuario } from '../Interfaces/Usuario';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { Contacto } from '../Interfaces/Contacto';
import { AgregarContactoComponent } from '../agregar-contacto/agregar-contacto.component';
import { ContactosService } from '../services/contactos.service';
import { OpenModalService } from '../services/open-modal.service';
import { Observable, tap } from 'rxjs';
import { Contact } from '../Interfaces/Contacto';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { FotoService } from '../services/foto.service';
import { WebView } from '@capacitor/core';
import { getDownloadURL,getStorage,listAll,ref } from 'firebase/storage';




@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public sesionIniciada: boolean = false;
  public contactos$: Observable<Contact[]> | null = null;
  

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  images: string[];
  constructor(private modalCtrl: ModalController,private listaContactos: ContactosService, public isModalOpen: OpenModalService, private auth: Auth, private userService: AuthService, private Foto: FotoService) {
    this.images = []
  }

  
  storage = getStorage();

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    onAuthStateChanged(this.auth, user =>{
      if(user){
        this.sesionIniciada = true;
        this.contactos$ = this._ContactosService.getContacts().pipe(tap(values => console.log(values)))
      }else{
        this.sesionIniciada = false;
      }
    })

    this.getPictures();
  }
  contactos: Contacto[] = [];
  favoritos: Contacto[] = this.listaContactos.favoritos;


  private _ContactosService = inject(ContactosService)

  setOpen(state: boolean) {
    this.isModalOpen.isOpen = state;  
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: InicioSesionComponent,
    });

    modal.present();
  }

  async deleteContact(id: string){
    try{
      await this._ContactosService.deleteContact(id);
      this.contactos$ = this._ContactosService.getContacts().pipe(tap(values => console.log(values)));
      alert("Has eliminado el contacto exitosamente")
    }
    catch(error){}
  }

  cerrarSesion(){
    this.userService.logout()
      .then(()=>{

            return this.modalCtrl.dismiss(null, '');  

      })
      .catch(error => console.log(error))
  }



  agregarFavoritos(contacto: Contacto){
    this.listaContactos.agregarFavoritos(contacto);
    alert("Has agregado a un contacto a favoritos");
  }

  async getPictures() {

   const imagesRef = ref(this.storage, 'images')
   listAll(imagesRef)
    .then(async response => {
      console.log(response);
      this.images = [];

      for (let item of response.items){
        const url = await getDownloadURL(item)
        this.images.push(url)

      }
    })
    .catch(error => console.log(error))
  }
}

