import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class UserAuthInterceptorService implements HttpInterceptor {

    constructor(private authService: UserAuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('user auth interceptor');
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                if (!user) {
                    return next.handle(req);
                }
                const modifiedRequest = req.clone({
                    params: new HttpParams().set('auth', user._token)
                });
                return next.handle(modifiedRequest);
            })
        );
    }
}
