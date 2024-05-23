import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  //Los datos de email y password se pasan como un objeto

  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth);
  }


}
