import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    //const params= new HttpParams().set('access_token',token)
    //return this.http.delete(environment.api+'personnes/'+id,{params})
    if (token) {
      const headers = new HttpHeaders().set('Authorization', token);
      const reqClone = req.clone({
        headers,
      });
      return next.handle(reqClone)
    }
    return next.handle(req)
  }
}

export const AuthHTTPInterceptor={
  provide: HTTP_INTERCEPTORS,
  useClass:  AuthInterceptor,
  multi:true


}
