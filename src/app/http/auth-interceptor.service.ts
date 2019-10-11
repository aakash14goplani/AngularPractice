import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepting request...');
    const modifiedRequest = req.clone({
      headers: req.headers.append('Access-Control-Allow-Origin', '*').append('Auth', 'aakash')
    });
    /* modifiedRequest = req.clone({
      url: '/recipes'
    }); */
    /* return next.handle(modifiedRequest).pipe(tap(
      events => {
        if (events.type === HttpEventType.Response) {
          console.log('response tapped from interceptor ', events.body);
        }
      }
    )); */
    return next.handle(modifiedRequest);
    // return next.handle(req);
  }

}
