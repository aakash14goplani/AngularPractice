import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';
import { take, exhaustMap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class UserAuthInterceptorService implements HttpInterceptor {

    constructor(
        private authService: UserAuthService,
        private store: Store<fromApp.AppState>
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('user auth interceptor');
        // return this.authService.user.pipe(
        return this.store.select('auth').pipe(
            take(1),
            map(authState => {
                return authState.user
            }),
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
