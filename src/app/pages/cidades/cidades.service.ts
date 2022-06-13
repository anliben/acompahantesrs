import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getAnunciantes(cidade: string) {
    return this.db.list(cidade);
  }

}
