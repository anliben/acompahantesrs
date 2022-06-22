import { HttpClient } from '@angular/common/http';
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
  img?: File;
  user?: string;
  path?: string;
  urlPhoto!: string;
  updated: boolean = false;
  imgBase!: File;
  imageDelete!: string;

  constructor(
    private fire: FireServiceService,
    private imgBB: ImgbbService,
    private http: HttpClient

  ) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user') as string;
    this.fire
      .getWhere('anunciantes', 'user', '==', this.user)
      .snapshotChanges()
      .forEach((snap) => {
        const data = snap[0].payload.doc.data() as any;
        if (data.imageBanner === '') {
          this.img = 'https://via.placeholder.com/200x200' as unknown as File;
        } else {
          this.img = data.imageBanner;
          this.imageDelete = data.imageBannerDelete;
          this.updated = true;
        }
      })
  }

  takePhoto(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.img = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.imgBase = event.target.files[0];
      this.img = this.imgBase;
      this.updated = false;
    }
  }

  upload() {
    this.imgBB.uploadFoto(this.imgBase, this.user).subscribe((res: PhotoInterface) => {
      this.fire.updateOne('anunciantes', this.user, {
        imageBanner: res,
        imageBannerUpdated: true,
        imageBannerDelete: '',
      });
      this.updated = true;
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

}
