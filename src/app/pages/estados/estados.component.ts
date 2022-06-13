import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireServiceService } from 'src/app/service/fire-service.service';
import { EstadosService } from './estados.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})
export class EstadosComponent implements OnInit {

  cidades: any[] = [];
  local: string = '';

  constructor(
    private router: Router,
    private fire: FireServiceService
  ) { }

  ngOnInit(): void {
    this.fire.getWhere('estados', 'estado', '==', 'rio grande do sul').snapshotChanges().forEach(snap => {

      snap.forEach(doc => {
        const data = doc.payload.doc.data() as object;
        const id = doc.payload.doc.id;
        this.cidades.push({id: id, ...data });
      });
    });
  }

  changeScreen(local: string) {
    this.router.navigate(['/cidades', local.split(' ').join('-').toLowerCase()]);
  }
  identify(index: number, item: any) {
    return item.id;
 }
}
