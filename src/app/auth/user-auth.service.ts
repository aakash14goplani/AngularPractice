import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router';

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

    constructor(private http: HttpClient, private router: Router) {}

    private API_KEY = 'AIzaSyAa4gxUdjzz2q1LTy7rK4eSFQqw6KP7ajA';
    // user = new Subject<User>();
    user = new BehaviorSubject<User>(null);

    public signup(email: string, password: string): Observable<AuthResponsePayload> {
        return this.http
        .post<AuthResponsePayload>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.API_KEY, {
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
        .post<AuthResponsePayload>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.API_KEY, {
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
        this.user.next(null);
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
        this.user.next(user);
    }
}
