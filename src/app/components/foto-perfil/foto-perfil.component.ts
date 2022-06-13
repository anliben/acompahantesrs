import { Component, OnInit } from '@angular/core';
import { PhotoInterface } from 'src/app/interfaces/photo.interface';
import { FireServiceService } from 'src/app/service/fire-service.service';
import { ImgbbService } from 'src/app/service/imgbb.service';

@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.scss'],
})
export class FotoPerfilComponent implements OnInit {
  img: any;
  user?: string;
  path?: string;
  title = '';
  message = '';
  mostrar = false;
  updated: boolean = false;

  constructor(private fire: FireServiceService, private imgBB: ImgbbService) {}

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
          this.updated = true;
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
        this.fire.updateOne('anunciantes', this.user, {
          imageProfile: res.thumb.url,
          imageProfileUpdated: true,
        });
        this.updated = true;
      });
    }
  }
}
