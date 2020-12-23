import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  login(credentials):Observable<any>{
    return this.http.post<any>(environment.api+'/Users/login',credentials)


  }

  logout(){
    localStorage.removeItem('token')
  }
  isAuthenticated():boolean{
    return !!localStorage.getItem('token')
  }
}
