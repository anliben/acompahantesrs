import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ModalComponent } from '../../shared/modal/modal.component';
import { applyActionCode, Auth, authState, onAuthStateChanged } from '@angular/fire/auth';
import { collection, Firestore } from '@angular/fire/firestore';
import { sendEmailVerification } from 'firebase/auth';
import { doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';

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
  disabledFotoPerfil: string = '';
  disabledFotoBanner: string = '';
  disabledFotoGaleria: string = '';
  disabledStory: string = 'brightness-[0.25]';

  posts?: Array<any>;
  none: any = '';
  id: any;

  code: string = '';
  activated: any = localStorage.getItem('activated');
  colorButton: string = '';
  textButton: string = '';
  
  constructor(
    private router: Router,
    public modal: ModalComponent,
    private auth: Auth,
    private firestore: Firestore,

  ) {
  }
  
  ngOnInit(): void {

    authState(this.auth).subscribe((user) => {
      this.verified = user!.emailVerified;
    })

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

    this.getInfoUser();

    this.buttonCollor();

    if (localStorage.getItem('nome') === '') {
      this.disabledFotoPerfil = 'brightness-[0.25]';
      this.disabledFotoBanner = 'brightness-[0.25]';
      this.disabledFotoGaleria = 'brightness-[0.25]';
    }
    else if (localStorage.getItem('imageProfile') === '') {
      this.disabledFotoPerfil = 'filter-none';
      this.disabledFotoBanner = 'brightness-[0.25]';
      this.disabledFotoGaleria = 'brightness-[0.25]';
    }
    else if (localStorage.getItem('imageProfile') !== '' && localStorage.getItem('imageBanner') === '') {
      this.disabledFotoPerfil = 'filter-none';
      this.disabledFotoBanner = 'filter-none';
      this.disabledFotoGaleria = 'brightness-[0.25]';
    }
    else if (localStorage.getItem('imageBanner') !== '') {
      this.disabledFotoPerfil = 'filter-none';
      this.disabledFotoBanner = 'filter-none';
      this.disabledFotoGaleria = 'filter-none';
    }

  }

  updatePhotoPerfil() {
    if (this.disabledFotoPerfil !== 'brightness-[0.25]') {
      this.router.navigate(['profile/foto-perfil']);
    }
  }

  updateBannerCidades() {
    if (this.disabledFotoBanner !== 'brightness-[0.25]') {
      this.router.navigate(['profile/banner-cidades']);
    }
  }

  updateStory() {
    this.router.navigate(['profile/story']);
  }

  updateYouPage() {
    if (this.disabledFotoGaleria !== 'brightness-[0.25]') {
      this.router.navigate(['profile/sua-pagina']);
    }
  }

  updatePlans() {
    this.router.navigate(['profile/planos']);
  }

  editProfile() {
    this.router.navigate(['profile/edit-profile']);
  }

  viewProfile() {
    let cidade = localStorage.getItem('cidade');
    let nome = localStorage.getItem('nome')?.toString();
    console.log(cidade);
    console.log(nome);
    this.router.navigate(['perfil/porto-alegre/'+{nome}]);
  }

  verifyAccount() {
    if (this.code !== '') {
      applyActionCode(this.auth, this.code)
        .then(() => {
          this.mostrar = true;
          this.title = 'Verificação realizada com sucesso';
          (this.message = 'Sucesso'), 'Sua conta foi verificada com sucesso!';
        })
        .catch(() => { });
    }
  }

  requestCode() {
    sendEmailVerification(this.auth.currentUser as any)
      .then(() => {
        this.mostrar = true;
        this.title = 'Verificação enviada com sucesso';
        this.message = 'Verifique seu email: Caixa de entrada ou spam!';
      });
  }

  getInfoUser() {

    let col = collection(this.firestore, 'anunciantes')
    let q = query(
      col,
      where('user', '==', this.user)
    );
    getDocs(q).then((res) => {
      res.forEach((item: any) => {
        console.log(item.data());
        
        localStorage.setItem('id', item.id);
        this.id = item.id
        localStorage.setItem('nome', item.data().nome);
        localStorage.setItem('idade', item.data().idade);
        localStorage.setItem('cache', item.data().cache);
        localStorage.setItem('telefone', item.data().telefone);
        localStorage.setItem('horario', item.data().horario);
        localStorage.setItem('cidade', item.data().cidade);
        localStorage.setItem('regiao', item.data().regiao);
        localStorage.setItem('descricao', item.data().descricao);
        localStorage.setItem('pagamento', item.data().pagamento);
        localStorage.setItem('activated', item.data().activated);
        localStorage.setItem('imageProfile', item.data().imageProfile);
        localStorage.setItem('imageBanner', item.data().imageBanner);

      })
    })
    

  }

  desativarAccount() {
    if (this.activated === "true") {
      let data = doc(this.firestore, 'anunciantes', this.id)
      updateDoc(data, { activated: false }).then((res) => {
        setTimeout(() => {
          location.reload();
        }, 1000)
      });
    }else{
      let data = doc(this.firestore, 'anunciantes', this.id)
      updateDoc(data, { activated: true }).then((res) => {
        setTimeout(() => {
          location.reload();
        }, 1000)
      });
    }
  }

  buttonCollor() {
    this.activated = localStorage.getItem('activated');
    console.log(this.activated);

    if (this.activated === "false" || this.activated === false) {
      this.textButton = 'Conta Desativada';
      this.colorButton = 'brightness-[0.25]';
    } else if (this.activated === "true" || this.activated === true) {
      this.textButton = 'Desativar Conta';
      this.colorButton = 'filter-none';
    } else{
      this.textButton = 'Desativar Conta';
      this.colorButton = 'filter-none';
    }
  }

}
