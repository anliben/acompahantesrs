import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { collection, doc, Firestore, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { EstadosService } from 'src/app/pages/estados/estados.service';


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
  user: any;

  mostrar: boolean = false;
  editado: boolean = false;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private estadosService: EstadosService,
    private firestore: Firestore
  ) { }

  ngOnInit() {
    this.cidades = this.estadosService.getCidades();
    this.user = localStorage.getItem('id') as string;

    let col = collection(this.firestore, 'pais')
    getDocs(col).then((res) => {
      let pais = res.docs.map((item: any) => {
        return {...item.data(), id: item.id}
      })
      this.estados = pais;
    })
    
     this.createForm(model);
}

  saveProfile() {
    let docRef = doc(this.firestore, 'anunciantes', this.user);
    updateDoc(docRef, {...this.formPerfil.value, activated: true}).then(()=>{
      this.mostrar = true;
      localStorage.removeItem('perfilEdited');
      localStorage.setItem('perfilEdited', 'true');
      this.editado = true;
    })
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

