import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


export class User {

  uid: string;
  username: string = "";

  constructor(auth: { uid: string; }) {
    this.uid = auth.uid
  }

}

@Injectable({
  providedIn: 'root'
})
export class FireServiceService {

  currentUser?: User | undefined;
  count: number = 1;

  constructor(
    private db: AngularFirestore,
  ) { }

  getAll(collection: string) {
    return this.db.collection(collection)
  }

  getWhere(collection: string, field: string, operator: any, value: any) {
    return this.db.collection(collection, ref => ref.where(field, operator, value));
  }

  deleteOne(collection: string, data: any) {
    return this.db.collection(collection).doc(data).delete();
  }

  updateOne(collection: string, dataRef: any, newData: any) {
    return this.getWhere(collection, 'user', '==', dataRef).snapshotChanges().forEach(snap => {
      snap.forEach(doc => {
        this.db.collection(collection).doc(doc.payload.doc.id).update(newData)
      });
    });
  }

  setOne(collection: string, dataRef: any, newData: any) {
    this.count = 1;
    let datas: any;
    return this.getWhere(collection, 'user', '==', dataRef).snapshotChanges().forEach(snap => {
      snap.map(doc => {
        datas = doc.payload.doc.data()
        if(this.count === 1){
          this.db.collection(collection).doc(doc.payload.doc.id).update({
            posts: [...datas.posts, ...newData]
          })
          this.count++;
        }
      });
    });
  }

  setStory(collection: string, dataRef: any, newData: any) {
    this.count = 1;
    let datas: any;
    return this.getWhere(collection, 'user', '==', dataRef).snapshotChanges().forEach(snap => {
      snap.map(doc => {
        datas = doc.payload.doc.data()
        if(this.count === 1){
          this.db.collection(collection).doc(doc.payload.doc.id).update({
            story: [...datas.posts, newData]
          })
          this.count++;
        }
      });
    });
  }

}
