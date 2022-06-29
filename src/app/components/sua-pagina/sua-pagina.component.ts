import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PhotoInterface } from 'src/app/interfaces/photo.interface';
import { FireServiceService } from 'src/app/service/fire-service.service';
import { ImgbbService } from 'src/app/service/imgbb.service';

@Component({
  selector: 'app-sua-pagina',
  templateUrl: './sua-pagina.component.html',
  styleUrls: ['./sua-pagina.component.scss'],
})
export class SuaPaginaComponent implements OnInit {

  images = [
    { path: 'https://via.placeholder.com/400x700', id: 0 },
    { path: 'https://via.placeholder.com/400x700', id: 1 },
    { path: 'https://via.placeholder.com/400x700', id: 2 },
    { path: 'https://via.placeholder.com/400x700', id: 3 },
    { path: 'https://via.placeholder.com/400x700', id: 4 },
    { path: 'https://via.placeholder.com/400x700', id: 5 },
    { path: 'https://via.placeholder.com/400x700', id: 6 },
    { path: 'https://via.placeholder.com/400x700', id: 7 },
    { path: 'https://via.placeholder.com/400x700', id: 8 },
  ];
  sideMenu: boolean = false;
  attr: string = '';
  img: any;
  user?: string;
  path?: string;
  imgBase!: File;
  imageDelete!: string;
  updated: boolean = false;
  updatedModal: boolean = false;
  indexPhoto = 9;

  constructor(
    private fire: FireServiceService,
    private imgBB: ImgbbService,
    private http: HttpClient,

    ) {}


  ngOnInit(): void {
    this.user = localStorage.getItem('user') as string;

    let newArr: any[] = [];

    this.fire
      .getWhere('anunciantes', 'user', '==', this.user)
      .snapshotChanges()
      .forEach((snap) => {
        const data = snap[0].payload.doc.data() as any;
        if (data.posts === '') {
          this.images = [
            { path: 'https://via.placeholder.com/400x700', id: 0 },
            { path: 'https://via.placeholder.com/400x700', id: 1 },
            { path: 'https://via.placeholder.com/400x700', id: 2 },
            { path: 'https://via.placeholder.com/400x700', id: 3 },
            { path: 'https://via.placeholder.com/400x700', id: 4 },
            { path: 'https://via.placeholder.com/400x700', id: 5 },
            { path: 'https://via.placeholder.com/400x700', id: 6 },
            { path: 'https://via.placeholder.com/400x700', id: 7 },
            { path: 'https://via.placeholder.com/400x700', id: 8 },
          ];
        } else {
          data.posts.forEach((element: any, index: number) => {
            newArr.push({
              path: element,
              id: index,
            });
          });
        }
      });
    this.images = newArr;
  }

  switchMenu() {
    this.sideMenu = !this.sideMenu;
  }


  takePhoto(event: any, id: number) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.images[id].path = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.imgBase = event.target.files[0];
      this.updated = true;

    }
  }

  upload() {
    this.imgBB.uploadFotos(this.imgBase, this.user).subscribe((res: any) => {
      console.log(res);
      res.forEach((response: string) => {
        let finalurl = 'https://api-acompanhantes.herokuapp.com' + response;
        this.fire.setOne('anunciantes', this.user, finalurl);
        this.update();
      })
    });
  }

  update() {
    this.updated = false;
    this.updatedModal = true;
  }

  addPhoto() {
    let index = this.images.length;
    this.images.push({
      path: 'https://via.placeholder.com/400x700',
      id: index++,
    });
  }

  deleteImage() {
    this.fire.updateOne('anunciantes', this.user, {
      imageBanner: '',
      imageBannerUpdated: false,
      imageBannerDelete: '',
    });
    this.updated = false;
    this.http.get(this.imageDelete).subscribe(() => {
    });
  }

  cancelar() {
    this.updated = false;
  }
}
