import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { FireServiceService } from './fire-service.service';


@Injectable({
  providedIn: 'root'
})
export class ImgbbService {


  constructor(
    private http: HttpClient,
    
  ) { }

  uploadFoto(file: File, name: any): Observable<any> {

    const url = `${environment.api}/upload/foto`;
    const formData = new FormData();
    formData.append('file', file);
    return this.http
    .post(url, formData, {
      params: {
        name: name
      }
    })
    .pipe(map((response: any)=> response));
  }

  uploadFotos(file: File, name: any): Observable<any> {
    const url = `${environment.api}/upload/fotos`;
    const formData = new FormData();
    formData.append('files', file);
    return this.http
    .post(url, formData,{
      params: {
        name: name
      }
    })
    .pipe(map((response: any)=> response));
  }
}
