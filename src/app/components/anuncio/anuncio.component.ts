import { Component, OnInit } from '@angular/core';
import { FireServiceService } from 'src/app/service/fire-service.service';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.scss'],
})
export class AnuncioComponent implements OnInit {
  plano: any = {
    nome: 'Plano de Exemplo',
    valor: '0',
    descricao: 'Assine um plano e ele aparecera desta forma',
    ganhos: [
      'Voce tem direito a SEO na primeira pagina',
      'Voce tem direito anuncios grátis'
    ],
  };
  user?: string;
  updated: boolean = false;
  planoUpdated: boolean = false;

  constructor(private fire: FireServiceService) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user') as string;

    this.fire
      .getWhere('anunciantes', 'user', '==', this.user)
      .snapshotChanges()
      .forEach((snap) => {
        snap.forEach((doc) => {
          const data: any = doc.payload.doc.data() as object;

          console.log(data.planos);
          if (data.planos) {
            console.log('pegando dados');

            this.fire
              .getWhere('planos', 'nome', '==', data.plano)
              .snapshotChanges()
              .forEach((snap) => {
                snap.forEach((doc) => {
                  const data: any = doc.payload.doc.data() as object;
                  console.log(data);
                  this.planoUpdated = true;
                });
              });
          } else {
            console.log('nao pegando dados');
          }
        });
      });
      
  }

  desativarPlano() {
    this.fire.updateOne('anunciantes', this.user, { plano: '' });
    this.updated = true;
  }
}
