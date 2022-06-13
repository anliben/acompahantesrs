import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgbbService {

  private readonly apiKey = 'bf0362a061f1cada6cb4cfc1885f36c4';

  constructor(
    private http: HttpClient
  ) { }

  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http
    .post('/upload', formData, {
      params: {
        key: this.apiKey
      }
    })
    .pipe(map((response: any)=> response['data']));
  }
}
