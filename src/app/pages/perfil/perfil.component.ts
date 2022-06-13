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
    console.log(this.cache)
    console.log(this.cidade)
    console.log(this.descricao)
    console.log(this.horario)
    console.log(this.idade)
    console.log(this.imageBanner)
    console.log(this.imageProfile)
    console.log(this.nome)
    console.log(this.pagamento)
    console.log(this.posts)
    console.log(this.regiao)
    console.log(this.telefone)
    console.log(this.user)
  }

  async getAnunciante(){
    let user = this.activatedRoute.snapshot.params['user']
    this.fire.getWhere('anunciantes', 'nome', '==', user).snapshotChanges().forEach(snap => {
      const id = snap[0].payload.doc.id;
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
  identify(index: number, item: any) {
    return item.id;
 }

}
