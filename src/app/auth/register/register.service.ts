import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
  ) { }

  registerUser(email: string, password: string){
    this.auth.createUserWithEmailAndPassword(email, password).then((data: any) => {
      localStorage.setItem('user', email);
      this.requestCode();
      this.router.navigate(['/login']);
    }).catch(() => {
      alert('Erro ao cadastrar');
    })
  }

  requestCode(){
    this.auth.authState.subscribe((user) => {
      user?.sendEmailVerification().then(() => {}).catch(() => {});
    }).unsubscribe();
  }

}
