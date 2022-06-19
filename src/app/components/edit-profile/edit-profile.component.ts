import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EstadosService } from 'src/app/pages/estados/estados.service';
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
    private estadosService: EstadosService
  ) { }

  ngOnInit() {
    this.cidades = this.estadosService.getCidades();
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
      estado: [model.estado = 'rio grande do sul'],
      regiao: [model.regiao],
      descricao: [model.descricao],
      pagamento: [model.pagamento],
      horario: [model.horario],
    });
  }


  identify(index: number, item: any) {
    return item.id;
 }
}

function model(model: any, any: any) {
  throw new Error('Function not implemented.');
}

