import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireServiceService } from 'src/app/service/fire-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  anunciante: any[] = [];
  cache?: string;
  cidade?: string;
  descricao?: string;
  horario?: string;
  idade?: number;
  imageBanner?: string;
  imageProfile?: string;
  nome?: string;
  pagamento?: string;
  posts?: Array<any>;
  regiao?: string;
  telefone?: string;
  user?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fire: FireServiceService
  ) { }

  ngOnInit(): void {
    this.getAnunciante();
  }

  async getAnunciante(){
    let user = this.activatedRoute.snapshot.params['user']
    this.fire.getWhere('anunciantes', 'nome', '==', user).snapshotChanges().forEach(snap => {
      const data = snap[0].payload.doc.data() as any;
      this.nome = data.nome;
      this.imageProfile = data.imageProfile;
      this.imageBanner = data.imageBanner;
      this.descricao = data.descricao;
      this.cidade = data.cidade;
      this.regiao = data.regiao;
      this.telefone = data.telefone;
      this.pagamento = data.pagamento;
      this.horario = data.horario;
      this.idade = data.idade;
      this.user = data.user;
      this.posts = data.posts;
      this.cache = data.cache;

    });

  }


}
