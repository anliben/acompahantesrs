import { Component, OnInit } from '@angular/core';
import { FireServiceService } from 'src/app/service/fire-service.service';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent implements OnInit {

  planos: any[] = [];

  constructor(
    private fire: FireServiceService
  ) { }

  ngOnInit(): void {
    this.fire.getAll('planos').snapshotChanges().forEach(snap => {
      snap.forEach(doc => {
        const data = doc.payload.doc.data() as object;
        const id = doc.payload.doc.id;
        this.planos.push({id:id, ...data });
      });
    });

  }

  identify(index: number, item: any) {
    return item.id;
 }

}
