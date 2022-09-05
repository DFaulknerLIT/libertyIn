import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // TODO: Replace with actual auth for the backend - this is merely a placeholder for testing
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer 1234'
      }
    });

    return next.handle(request);
  }
}
