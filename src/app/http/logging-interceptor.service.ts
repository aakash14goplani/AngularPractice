import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Logging Interceptor started...', req.headers);
    return next.handle(req).pipe(tap(
      events => {
        if (events.type === HttpEventType.Response) {
          console.log('response tapped from interceptor ', events.body);
        }
      }
    ));
  }

}
