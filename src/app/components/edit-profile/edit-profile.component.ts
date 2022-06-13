import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FireServiceService } from 'src/app/service/fire-service.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {


  formPerfil!: FormGroup;
  infos: any;
  estados: any[] = [];
  cidades: any[] = [];
  user?: string;

  mostrar: boolean = false;
  editado: boolean = false;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private db: AngularFirestore,
    private fire: FireServiceService,
  ) { }

  ngOnInit() {
    this.user = localStorage.getItem('user') as string;
    this.createForm(model);
    this.fire.getAll('pais').snapshotChanges().forEach(snap => {
      snap.forEach(doc => {
        const data = doc.payload.doc.data() as object;
        this.estados.push({...data });
      });
    });
  }

  saveProfile() {
    this.db.collection('anunciantes').add({
      stars: 1,
      ...this.formPerfil.value,
      imageProfile: '',
      imageBanner: '',
      posts: [],
      story: [],
      user: this.user
    }).then(() => {
      this.mostrar = true;
      localStorage.removeItem('perfilEdited');
      localStorage.setItem('perfilEdited', 'true');
      this.editado = true;
    })
  }

  backProfile() {
    this.router.navigate(['profile']);
  }

  createForm(model: any) {
    this.formPerfil = this.formBuilder.group({
      nome: [model.nome],
      idade: [model.idade],
      telefone: [model.telefone],
      cache: [model.cache],
      cidade: [model.cidade],
      estado: [model.estado],
      regiao: [model.regiao],
      descricao: [model.descricao],
      pagamento: [model.pagamento],
      horario: [model.horario],
    });
  }

  searchCidade(event: any) {
    this.cidades = [];
    const local = event.target.value.toLowerCase();
    this.fire.getWhere('estados', 'cidade', '==', local).snapshotChanges().forEach(snap => {
      snap.forEach(doc => {
        const data = doc.payload.doc.data() as object;
        const id = doc.payload.doc.id;
        this.cidades.push({id:id, ...data });
      });
    });
  }
  identify(index: number, item: any) {
    return item.id;
 }
}

function model(model: any, any: any) {
  throw new Error('Function not implemented.');
}

