import { Component, OnInit } from '@angular/core';
import { PaisService } from './pais.service';
import { Router } from '@angular/router';
import { FireServiceService } from 'src/app/service/fire-service.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent implements OnInit {

  sideMenu: boolean = false;
  paises: any[] = [ ];

  constructor(
    private router: Router,
    private fire: FireServiceService
  ) { }

  ngOnInit(): void {
    this.fire.getAll('pais').snapshotChanges().forEach(snap => {
      snap.forEach(doc => {
        const data = doc.payload.doc.data() as object;
        const id = doc.payload.doc.id;
        this.paises.push({id: id, ...data });
      });
    });
  }

  switchMenu(){
    this.sideMenu = !this.sideMenu;
  }

  changeScreen(local: string){
    this.router.navigate(['/estados', local.split(' ').join('-').toLowerCase()]);
  }
  identify(index: number, item: any) {
    return item.id;
 }

}
