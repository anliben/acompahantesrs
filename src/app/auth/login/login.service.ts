import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private register: AngularFireAuth,
    private router: Router,
  ) { }

  login(email: string, password: string){
    this.register
    .signInWithEmailAndPassword(email, password)
    .then((data: any) => {
      localStorage.setItem('user', email);
      this.router.navigate(['/profile']);
    })
    .catch((err) => { });
  }


}
