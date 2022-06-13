import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getCidades(estado: string) {
    return this.db.list(`/cidades/${estado}`);
  }

}
