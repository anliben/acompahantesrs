import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ModalComponent } from '../../shared/modal/modal.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ProfileService } from './profile.service';
import { FireServiceService } from '../../service/fire-service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
  none:any = '';

  code: string = '';
  activated: any = localStorage.getItem('activated');
  colorButton: string = '';
  textButton:string = '';

  constructor(
    private router: Router,
    public modal: ModalComponent,
    private auth: AngularFireAuth,
    private service:FireServiceService,
    private db: AngularFirestore,

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
    
    this.getInfoUser();

    this.buttonCollor();
    
    if(localStorage.getItem('nome') === ''){
      this.disabledFotoPerfil = 'brightness-[0.25]';
      this.disabledFotoBanner = 'brightness-[0.25]';
      this.disabledFotoGaleria = 'brightness-[0.25]';
    }
    else if(localStorage.getItem('imageProfile') === ''){
      this.disabledFotoPerfil = 'filter-none';
      this.disabledFotoBanner = 'brightness-[0.25]';
      this.disabledFotoGaleria = 'brightness-[0.25]';   
    }
    else if(localStorage.getItem('imageProfile') !== '' && localStorage.getItem('imageBanner') === ''){
      this.disabledFotoPerfil = 'filter-none';
      this.disabledFotoBanner = 'filter-none';
      this.disabledFotoGaleria = 'brightness-[0.25]';   
    }
    else if(localStorage.getItem('imageBanner') !== ''){
      this.disabledFotoPerfil = 'filter-none';
      this.disabledFotoBanner = 'filter-none';
      this.disabledFotoGaleria = 'filter-none';   
    }
    
  }

  updatePhotoPerfil() {
    if(this.disabledFotoPerfil !== 'brightness-[0.25]'){
      this.router.navigate(['profile/foto-perfil']);
    }
  }

  updateBannerCidades() {
    if(this.disabledFotoBanner !== 'brightness-[0.25]'){
    this.router.navigate(['profile/banner-cidades']);
    }
  }

  updateStory() {
    this.router.navigate(['profile/story']);
  }

  updateYouPage() {
    if(this.disabledFotoGaleria !== 'brightness-[0.25]'){
    this.router.navigate(['profile/sua-pagina']);
    }
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

  getInfoUser(){    
    this.service.getWhere('anunciantes', 'user', '==', this.user).stateChanges().forEach(snap => {
      
      const data = snap[0].payload.doc.data() as any;

      console.log(data);
      
      localStorage.setItem('nome', data.nome);
      localStorage.setItem('idade', data.idade);
      localStorage.setItem('cache', data.cache);
      localStorage.setItem('telefone', data.telefone);
      localStorage.setItem('horario', data.horario);
      localStorage.setItem('cidade', data.cidade);
      localStorage.setItem('regiao', data.regiao);
      localStorage.setItem('descricao', data.descricao);
      localStorage.setItem('pagamento', data.pagamento);
      localStorage.setItem('activated', data.activated);
      localStorage.setItem('imageProfile', data.imageProfile);
      localStorage.setItem('imageBanner', data.imageBanner);
      
    }); 
    
  }
  desativarAccount(){
    if(this.activated === "true"){
      this.service.updateOne('anunciantes', this.user, {activated: false})  
      setTimeout(() => {
        location.reload();
      }, 1000)
    }
  }

  buttonCollor(){
     this.activated = localStorage.getItem('activated');
     console.log(this.activated);
     
    if(this.activated === "false" || this.activated === false){
      this.textButton = 'Conta Desativada';
      this.colorButton = 'brightness-[0.25]';
    }else if (this.activated === "true" || this.activated === true){
      this.textButton = 'Desativar Conta';
      this.colorButton = 'filter-none';
    }
  }

}
