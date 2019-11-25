import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from '../models/user'
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class UserServices {
 myurl ='https://jsonplaceholder.typicode.com/users';

  constructor(
      private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    console.log('ok');
    return  this.http.get<User[]>(this.myurl)
  }
}
