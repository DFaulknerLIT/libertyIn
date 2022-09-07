import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.headers.get("skip")) {
      return next.handle(request);
    } else {
      let access_token = localStorage.getItem('user_access_token');
      if (access_token) {
        request = request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + access_token
          }
        });
        return next.handle(request);
      }
      return next.handle(request);
    }
  }
}
