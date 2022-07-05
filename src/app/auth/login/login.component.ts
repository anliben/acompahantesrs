import { Component, OnInit } from '@angular/core';
import { Auth, reload } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  colorEmailValid: string = '';
  colorPasswordValid: string = '';
  error_message: string = '';
  token: string = '12332312fdK233Kfs021';
  showPassword: boolean = false;
  constructor(
    private auth: Auth,
    private router: Router
  ) { }

  ngOnInit(): void { }

  login() {
    if (this.email !== '' || this.password !== '') {

      if (this.password.length >= 6) {
        this.error_message = ''
        signInWithEmailAndPassword(this.auth, this.email, this.password).then((res) => {
          localStorage.setItem('token', res.user.refreshToken);
          localStorage.setItem('user', this.email);
          this.router.navigate(['/profile']);

        })

      } else {
        this.error_message = 'Senha menor que 6 caracteres'
        this.colorPasswordValid = 'border-red-600'
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

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

}
