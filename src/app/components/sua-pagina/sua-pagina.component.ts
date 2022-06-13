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
    { path: 'https://via.placeholder.com/400x700' },
    { path: 'https://via.placeholder.com/400x700' },
  ];
  sideMenu: boolean = false;

  img: any;
  user?: string;
  path?: string;

  constructor(private fire: FireServiceService, private imgBB: ImgbbService) {}
  switchMenu() {
    this.sideMenu = !this.sideMenu;
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('user') as string;
    this.fire
      .getWhere('anunciantes', 'user', '==', this.user)
      .snapshotChanges()
      .forEach((snap) => {
        const data = snap[0].payload.doc.data() as any;
        if (data.imageProfile === '') {
          this.img = 'https://via.placeholder.com/200x200';
        } else {
          this.img = data.imageProfile;
        }
      });
  }

  takePhoto(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.img = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      const imgBase = event.target.files[0];
      this.imgBB.upload(imgBase).subscribe((res: PhotoInterface) => {
        this.fire.setOne('anunciantes', this.user, res.image.url);
      });
    }
  }
}
