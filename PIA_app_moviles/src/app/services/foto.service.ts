import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { WebView } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { ref, uploadBytes, Storage, getDownloadURL } from '@angular/fire/storage';


let foto:{
  path: string | undefined,
  webViewPath?: string
}

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private Storage: Storage) { }

 

  async addFoto(): Promise<File | null> {
    const capturedPhoto = await Camera.getPhoto({      
      resultType: CameraResultType.Uri,      
      source: CameraSource.Camera,
      quality: 100 
    });

    if(capturedPhoto.webPath){
    const response = await fetch(capturedPhoto.webPath);
    const blob = await response.blob()
    const file = new File([blob], `photo_${new Date().getTime()}.jpeg`, { type: "image/jpeg" });
    
    return file;
    }
    else {
      console.error('Photo capture failed, webPath is undefined.');
      return null;
    }
  }

  public async uploadImage(file: File | null): Promise<string> {
    if(file){
    const filePath= 'images/${'+file.name+'}';
    const fileRef= ref(this.Storage, filePath);
  
   uploadBytes(fileRef, file)
    .then(response => console.log(response))
    .catch(error => console.log(error));
      console.log('hola')
  

    return filePath
    }
    else {
      return ''
    }
    }

  
}
