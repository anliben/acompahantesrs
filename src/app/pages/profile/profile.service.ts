import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private auth: AngularFireAuth,
  ) { }

  verifyLogin(){
    this.auth.authState.forEach(user => {
      //console.log(user);
    })
    return this.auth.currentUser;

  }
}
