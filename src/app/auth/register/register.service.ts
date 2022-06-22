import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(    private db: AngularFirestore,

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
  adcAnunciante(){

    this.db.collection('anunciantes').add({
    stars: 1,
    user: localStorage.getItem('user'),
    activated: false,
    nome: '',
    idade: '',
    telefone: '',
    cache: '',
    cidade: '',
    estado: '',
    regiao: '',
    descricao: '',
    pagamento: '',
    horario: '',
    imageProfile: '',
    imageBanner: '',
    posts: [],
    story: [],
  }) 

}
}
