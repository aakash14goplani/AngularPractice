import { UserAuthService } from './user-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

    constructor(
        private authService: UserAuthService,
        private router: Router,
        private store: Store<fromApp.AppState>
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        // return this.authService.user.pipe(
        return this.store.select('auth').pipe(
            take(1),
            map( authData => {
                const isAuth = !!authData.user;
                if (isAuth) {
                    return true;
                }
                return this.router.createUrlTree(['/auth']);
            }),
            /* tap(isAuth => {
                if (!isAuth) {
                    this.router.navigate(['/auth']);
                }
            }) */
        );
    }
}
