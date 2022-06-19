import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ModalComponent } from '../../shared/modal/modal.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  title?: string;
  message?: string;
  mostrar: boolean = false;
  user?: string;
  verified: boolean = false;

  code: string = '';

  constructor(
    private router: Router,
    public modal: ModalComponent,
    private auth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      this.verified = user!.emailVerified;
    });

    this.user = localStorage.getItem('user') as string;
    let perfilEdited = localStorage.getItem('perfilEdited') as string;
    let fotoCidadeEdited = localStorage.getItem('fotoCidadeEdited') as string;
    let fotoSuaPaginaEdited = localStorage.getItem(
      'fotoSuaPaginaEdited'
    ) as string;
    let PlanosAccepted = localStorage.getItem('PlanosAccepted') as string;

    if (PlanosAccepted === null) {
      this.mostrar = true;
      this.title = 'Assine um plano';
      this.message =
        'Para assinar um plano e ter seu perfil destacado no Google ou so nas primeiras listagem, clique em "Editar Perfil"';
    }
    if (fotoCidadeEdited === null) {
      this.mostrar = true;
      this.title = 'Banner de Cidade nao atualizado';
      this.message =
        'Para atualizar sua fot de cidade, clique em "Banner de Cidades"';
    }
    if (fotoSuaPaginaEdited === null) {
      this.mostrar = true;
      this.title = 'Sua Pagina esta sem fotos';
      this.message =
        'Para colocar pagina na sua pagina, clique em "Sua Pagina"';
    }
    if (perfilEdited === null) {
      this.mostrar = true;
      this.title = 'Perfil não atualizado';
      this.message = 'Para atualizar seu perfil, clique em "Editar Perfil"';
    }
  }

  updatePhotoPerfil() {
    this.router.navigate(['profile/foto-perfil']);
  }
  updateBannerCidades() {
    this.router.navigate(['profile/banner-cidades']);
  }
  updateStory() {
    this.router.navigate(['profile/story']);
  }
  updateYouPage() {
    this.router.navigate(['profile/sua-pagina']);
  }
  updatePlans() {
    this.router.navigate(['profile/planos']);
  }
  editProfile() {
    this.router.navigate(['profile/edit-profile']);
  }

  verifyAccount() {
    if (this.code !== '') {
      this.auth
        .applyActionCode(this.code)
        .then(() => {
          this.mostrar = true;
          this.title = 'Verificação realizada com sucesso';
          (this.message = 'Sucesso'), 'Sua conta foi verificada com sucesso!';
        })
        .catch(() => {});
    }
  }
  requestCode() {
    this.auth.authState
      .subscribe((user) => {
        user
          ?.sendEmailVerification()
          .then(() => {
            this.mostrar = true;
            this.title = 'Verificação enviada com sucesso';
            this.message = 'Verifique seu email: Caixa de entrada ou spam!';
          })
          .catch((err) => {
          });
      })
  }
}
