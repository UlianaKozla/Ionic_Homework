import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../models/post";
import {addParams} from "../helpers/addQueryParamsToURL";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  myurl ='https://jsonplaceholder.typicode.com/posts';

  constructor(
      private http: HttpClient
  ) { }

  getPosts(query: {}): Observable<Post[]> {
    const url = addParams(this.myurl, query);
    return this.http.get<Post[]>(url);
  }
}
