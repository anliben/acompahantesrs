import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
  re_password: string = '';
  colorEmailValid: string = '';
  colorPasswordValid: string = '';
  error_message: string = '';

  constructor(
    private router: Router,
    private auth: Auth,
    private firestore: Firestore
  ) { }

  ngOnInit(): void { }

  register() {
    if (this.email !== '' || this.password !== '') {
      this.error_message = ''
      if (this.password === this.re_password && this.password.length >= 6) {
        createUserWithEmailAndPassword(this.auth, this.email, this.password)
          .then((res) => {
            this.adcAnunciante();
          })
      } else {
        this.error_message = 'Senhas diferentes ou menor que 6 caracteres'
      }
    } else {
      this.error_message = 'Preencha todos os campos'
    }
  }

  emailChange() {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (re.test(this.email)) {
      this.colorEmailValid = 'border-green-600'
      this.error_message = ''
    } else {
      this.colorEmailValid = 'border-red-600'
      this.error_message = 'Email inválido'
    }
  }

  passwordChange() {
    if (this.password.length >= 6) {
      this.error_message = ''
      this.colorPasswordValid = 'border-green-600'
    } else {
      this.error_message = 'Senha menor que 6 caracteres'
      this.colorPasswordValid = 'border-red-600'
    }
  }

  adcAnunciante() {

    let col = collection(this.firestore, 'anunciantes');
    addDoc(col, {
      stars: 1,
      user: this.email,
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
    }).then(() => {
      localStorage.setItem('user', this.email);
      this.router.navigate(['/login']);
    })

  }
}
