import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post('http://43.205.208.194:5000/api/auth/login', data);
  }
  signUp(data: Users): Observable<Users> {
    return this.http.post<any>('http://43.205.208.194:5000/api/auth/signup',data);
  }
    

}
