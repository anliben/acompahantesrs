import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FireServiceService } from 'src/app/service/fire-service.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.scss']
})
export class CidadesComponent implements OnInit {

  anunciantes: any[] = [];

  cidade?: string;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private fire: FireServiceService
  ) { }

  ngOnInit(): void {

    console.log(
      this.router.url.split('/')[1].split('-').join(' ')
    );

    let cidade: string = this.router.url.split('/')[1].split('-').join(' ')

    this.fire.getWhere('anunciantes', 'cidade', '==', cidade).snapshotChanges().forEach(snap => {
      snap.forEach(doc => {
        let id = doc.payload.doc.id;
        const data: any = doc.payload.doc.data();
        this.anunciantes.push({ id: id, ...data });
      });
    });

  }

  changeScreen(local: string, user: string) {
    this.router.navigate(['/perfil', local.split(' ').join('-'), user]);
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
  identify(index: number, item: any) {
    return item.id;
 }
}
