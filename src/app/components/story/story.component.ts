import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { FireServiceService } from 'src/app/service/fire-service.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  img: any;
  user?: string;
  path?: string;

  constructor(
    private storage: AngularFireStorage,
    private fire: FireServiceService
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user') as string;
    this.fire.getWhere('anunciantes', 'user', '==', this.user).snapshotChanges().forEach(snap => {
      const data = snap[0].payload.doc.data() as any;
      if(data.imageProfile === '') {
        this.img = 'https://via.placeholder.com/200x200';
      }else{
        this.img = data.imageProfile;
      }
    });
    }

    takePhoto(event:any) {
      if(event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e: any) => this.img = e.target.result;
        reader.readAsDataURL(event.target.files[0]);
        const imgBase = event.target.files[0]
        this.path = `fotos/${this.user}/${new Date().getTime()}_${imgBase.name}`;
        const fileRef = this.storage.ref(this.path);
        this.storage.upload(this.path, imgBase).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(url => {
              this.fire.setStory('anunciantes', this.user, url);
            })
          })
        ).subscribe().unsubscribe();
      }
    }

}
