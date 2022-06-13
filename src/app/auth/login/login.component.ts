import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

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

  constructor(
    private service: LoginService
  ) { }

  ngOnInit(): void { }

  login() {
    if (this.email !== '' || this.password !== '') {

      if (this.password.length >= 6) {
        this.error_message = ''
        this.service.login(this.email, this.password)
      }else{
        this.error_message = 'Senha menor que 6 caracteres'
        this.colorPasswordValid = 'border-red-600'
      }
    }else{
      this.error_message = 'Preencha todos os campos'
    }
  }

  emailChange() {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (re.test(this.email)) {
      this.colorEmailValid = 'border-green-600'
      this.error_message = ''
    }else{
      this.colorEmailValid = 'border-red-600'
      this.error_message = 'Email inválido'
    }
  }

  passwordChange(){
    if(this.password.length >= 6){
      this.error_message = ''
      this.colorPasswordValid = 'border-green-600'
    }else{
      this.error_message = 'Senha menor que 6 caracteres'
      this.colorPasswordValid = 'border-red-600'
    }
  }

}
