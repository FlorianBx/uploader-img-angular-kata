import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../models/image';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadImageService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/api';

  uploadImage(image: File): Observable<Image> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<Image>(`${this.baseUrl}/upload`, formData);
  }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.baseUrl}/images`);
  }
}
