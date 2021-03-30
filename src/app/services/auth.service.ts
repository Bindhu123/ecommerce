import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  addUser(productBody): Observable<User> {
    const baseUrl = "http://localhost:3000/auth";
    return this.http.post<User>(baseUrl, productBody);
  }

  getUser(email): Observable<User> {
    const baseUrl = "http://localhost:3000/auth";
    return this.http.post<User>(baseUrl, email);
  }


}
