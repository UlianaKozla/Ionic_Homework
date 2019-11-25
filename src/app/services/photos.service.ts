import { Injectable } from '@angular/core';
import {Photo} from "../models/photo";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  url = 'https://picsum.photos/v2/list';

  constructor(
      private HttpClient: HttpClient
  ) { }

  getPhotos(query: {}): Observable<Photo[]> {
    console.log('ok');
    return  this.HttpClient.get<Photo[]>(this.url)
  }
}
