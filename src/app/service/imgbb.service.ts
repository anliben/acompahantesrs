import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ImgbbService {

  private readonly apiKey = 'bf0362a061f1cada6cb4cfc1885f36c4';

  constructor(
    private http: HttpClient
  ) { }

  upload(file: File): Observable<any> {
    const url = `${environment.api}/upload`;
    const formData = new FormData();
    formData.append('image', file);
    return this.http
    .post(url, formData, {
      params: {
        key: this.apiKey
      }
    })
    .pipe(map((response: any)=> response['data']));
  }
}
