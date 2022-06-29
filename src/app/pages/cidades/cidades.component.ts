import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Firestore, getDoc, query, where } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { collection, getDocs } from 'firebase/firestore';


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
    private firestore: Firestore
  ) { }

  ngOnInit(): void {

    let cidade: string = this.router.url.split('/')[1].split('-').join(' ')
    let col = collection(this.firestore, 'anunciantes')
    let q = query(
      col,
      where('cidade', '==', cidade),
      where('activated', '==', true)
    )

    getDocs(q).then(res => {
      let m = res.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })
      this.anunciantes = m
    })
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
