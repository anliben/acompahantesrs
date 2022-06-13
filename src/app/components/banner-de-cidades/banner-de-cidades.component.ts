import { Component, OnInit } from '@angular/core';
import { PhotoInterface } from 'src/app/interfaces/photo.interface';
import { FireServiceService } from 'src/app/service/fire-service.service';
import { ImgbbService } from 'src/app/service/imgbb.service';

@Component({
  selector: 'app-banner-de-cidades',
  templateUrl: './banner-de-cidades.component.html',
  styleUrls: ['./banner-de-cidades.component.scss'],
})
export class BannerDeCidadesComponent implements OnInit {
  img?: string;
  user?: string;
  path?: string;
  urlPhoto!: string;
  updated: boolean = false;

  constructor(
    private fire: FireServiceService,
    private imgBB: ImgbbService
  ) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user') as string;
    this.fire
      .getWhere('anunciantes', 'user', '==', this.user)
      .snapshotChanges()
      .forEach((snap) => {
        const data = snap[0].payload.doc.data() as any;
        if (data.imageBanner === '') {
          this.img = 'https://via.placeholder.com/200x200';
        } else {
          this.img = data.imageBanner;
        }
      })
  }

  takePhoto(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.img = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      const imgBase = event.target.files[0];
      this.imgBB.upload(imgBase).subscribe((res: PhotoInterface) => {
        this.fire.updateOne('anunciantes', this.user, {
          imageBanner: res.image.url,
          imageBanerUpdated: true,
        });
        this.updated = true;
      });

    }
  }

}
