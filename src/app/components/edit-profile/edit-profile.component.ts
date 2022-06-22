import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.fire.getAll('pais').snapshotChanges().forEach(snap => {
      snap.forEach(doc => {
        const data = doc.payload.doc.data() as object;
        this.estados.push({...data });
      });
    });
    this.createForm(model);
    console.log(this.user);
     
}

  saveProfile() {
   
      this.fire.updateOne('anunciantes', this.user, {...this.formPerfil.value, activated: true})

        this.mostrar = true;
        localStorage.removeItem('perfilEdited');
        localStorage.setItem('perfilEdited', 'true');
        this.editado = true;
      
  }

  backProfile() {
    this.router.navigate(['/profile']);
  }

  createForm(model: any) {
    
    this.formPerfil = this.formBuilder.group({
      nome: [model.nome = localStorage.getItem('nome'), Validators.required],
      idade: [model.idade = localStorage.getItem('idade'), Validators.required],
      telefone: [model.telefone = localStorage.getItem('telefone'), Validators.required],
      cache: [model.cache = localStorage.getItem('cache'), Validators.required],
      cidade: [model.cidade = localStorage.getItem('cidade'), Validators.required],
      estado: [model.estado = 'rio grande do sul'],
      regiao: [model.regiao = localStorage.getItem('regiao')],
      descricao: [model.descricao = localStorage.getItem('descricao'), Validators.required],
      pagamento: [model.pagamento = localStorage.getItem('pagamento'), Validators.required],
      horario: [model.horario = localStorage.getItem('horario'), Validators.required],
    });
  }


  identify(index: number, item: any) {
    return item.id;
 }
}

function model(model: any, any: any) {
  throw new Error('Function not implemented.');
}

