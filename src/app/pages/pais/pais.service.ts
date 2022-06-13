import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { PaisInterface } from '../../interfaces/pais.interface'

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getpaises(){
    return this.db.list('/estados');
  }

}
