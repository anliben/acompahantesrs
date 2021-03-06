import { Component, OnInit } from '@angular/core';
import { FireServiceService } from 'src/app/service/fire-service.service';
import { collection, Firestore } from '@angular/fire/firestore';
import { doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent implements OnInit {

  planos: any[] = [];
  user = localStorage.getItem('user');
  updated: boolean = false;
  planoActivated: boolean = false;

  constructor(
    private fire: FireServiceService,
    private firestore: Firestore
  ) { }

  ngOnInit(): void {
    this.fire.getAll('planos').snapshotChanges().forEach(snap => {
      snap.forEach(doc => {
        const data = doc.payload.doc.data() as object;
        const id = doc.payload.doc.id;
        this.planos.push({id:id, ...data });
      });
    });
    console.log(localStorage.getItem('user'));
    
    console.log(this.user);
    
    this.fire.getWhere('anunciantes', 'user', '==', this.user).snapshotChanges().forEach(snap =>{
      const data = snap[0].payload.doc.data() as any;
      data.planos
      console.log(data.planos);
      
      if(data.planos !== ''){
        this.planoActivated = true;
      }
      console.log(this.planoActivated);
    })

    let col = collection(this.firestore, 'planos')
    getDocs(col).then((res) => {
      res.forEach((item: any) => {
        console.log(item.data());

      })
    })
    
  }

  identify(index: number, item: any) {
    return item.id;
 }

 desativarPlano() {
  this.fire.updateOne('anunciantes', this.user, { planos: '' });
  this.updated = true;
  location.reload();
}

}
