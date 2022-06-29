import { Component, OnInit } from '@angular/core';
import { Firestore, getDocs } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { collection, query, where } from 'firebase/firestore';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  anunciante: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private firestore: Firestore
  ) {
    let user = this.activatedRoute.snapshot.params['user']

    let cole = collection(this.firestore, 'anunciantes');
    let r = query(
      cole,
      where('nome', '==', user)
    )

    getDocs(r).then((res) => {
      let a = res.forEach((item: any) => {
        console.log(item);
        this.anunciante = { ...item.data(), id: item.id }
      })
    })
  }

  ngOnInit(): void {
  }

}
