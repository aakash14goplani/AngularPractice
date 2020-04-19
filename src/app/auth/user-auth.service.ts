import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.action';

export interface AuthResponsePayload {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class UserAuthService {

    constructor(
        private http: HttpClient,
        private router: Router,
        private store: Store<fromApp.AppState>
    ) {}

    private postRequest = this.processUser();
    // user = new Subject<User>();
    // user = new BehaviorSubject<User>(null);
    timeOut: any;

    public signup(email: string, password: string): Observable<AuthResponsePayload> {
        return this.http
        .post<AuthResponsePayload>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.postRequest, {
            email,
            password,
            returnSecureToken: true
        })
        .pipe(
            catchError(this.handleError),
            tap(responseData => {
                this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
            })
        );
    }

    public login(email: string, password: string): Observable<AuthResponsePayload> {
        return this.http
        .post<AuthResponsePayload>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.postRequest, {
            email,
            password,
            returnSecureToken: true
        })
        .pipe(
            catchError(this.handleError),
            tap(responseData => {
                this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
            })
        );
    }

    public logout(): void {
        // this.user.next(null);
        this.store.dispatch(new AuthActions.Logout());
        localStorage.removeItem('userData');
        if (this.timeOut) {
            clearTimeout(this.timeOut);
        }
        this.timeOut = null;
        this.router.navigate(['/auth']);
    }

    private handleError(errorResponse: HttpErrorResponse): Observable<never> {
        let errorMessage = 'An unknown error occured!';

        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
        }

        switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'Email already in-use!';
                break;
            case 'EMAIL_NOT_FOUND':
            case 'INVALID_PASSWORD':
                errorMessage = 'This password-email combination is not correct!';
                break;
            default: break;
        }
        return throwError(errorMessage);
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expiryDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, userId, token, expiryDate);
        // this.user.next(user);
        this.store.dispatch(
            new AuthActions.Login({
                email: email,
                id: userId,
                token: token,
                tokenExpirationDate: expiryDate
            })
        );
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }

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

    public autoLogin(): void {
        const userData: {
            email: string,
            id: string,
            token: string,
            tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }

        const continueUserSession = new User(userData.email, userData.id, userData.token, new Date(userData.tokenExpirationDate));
        if (continueUserSession._token) {
            // this.user.next(continueUserSession);
            this.store.dispatch(new AuthActions.Login({
                email: userData.email,
                id: userData.id,
                token: userData.token,
                tokenExpirationDate: new Date(userData.tokenExpirationDate)
            }));
            const sessionExpiryData = new Date(userData.tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(sessionExpiryData);
        }
    }

    public autoLogout(expirationDuration: number): void {
        this.timeOut = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }
}
