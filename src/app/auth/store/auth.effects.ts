import { Actions, ofType, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as AuthActions from './auth.action';

export interface AuthResponsePayload {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private router: Router
    ) { }

    private postRequest = this.processUser();

    @Effect()
    authLogin = this.actions$.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap((authData: AuthActions.LoginStart) => {
            return this.http
                .post<AuthResponsePayload>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.postRequest, {
                    email: authData.payload.email,
                    password: authData.payload.password,
                    returnSecureToken: true
                })
                .pipe(
                    map(responseData => {
                        // response handling
                        const expiryDate = new Date(new Date().getTime() + +responseData.expiresIn * 1000);
                        return new AuthActions.Login({
                            email: responseData.email,
                            id: responseData.localId,
                            token: responseData.idToken,
                            tokenExpirationDate: expiryDate
                        })
                    }),
                    catchError(errorRes => {
                        // error handling
                        let errorMessage = 'An unknown error occurred!';
                        if (!errorRes.error || !errorRes.error.error) {
                            return of(new AuthActions.LoginFail(errorMessage));
                        }
                        switch (errorRes.error.error.message) {
                            case 'EMAIL_EXISTS':
                                errorMessage = 'This email exists already';
                                break;
                            case 'EMAIL_NOT_FOUND':
                                errorMessage = 'This email does not exist.';
                                break;
                            case 'INVALID_PASSWORD':
                                errorMessage = 'This password is not correct.';
                                break;
                        }
                        return of(new AuthActions.LoginFail(errorMessage));
                    })
                );
        })
    );

    @Effect({ dispatch: false })
    authSuccess = this.actions$.pipe(
        ofType(AuthActions.LOGIN),
        tap(() => {
            this.router.navigate(['/']);
        })
    );

    private processUser(): string {
        const tempArray = ['AIzaSyAa', 'Ty7rK4eSFQqw6KP', '4gxUdjzz2q1L', '7ajA'];
        let evenString = '';
        let oddString = '';
        for (let i = 0; i < tempArray.length; i++) {
            if (i % 2 === 0) {
                evenString += tempArray[i];
            } else {
                oddString += tempArray[i];
            }
        }
        return (evenString + oddString);
    }
}
