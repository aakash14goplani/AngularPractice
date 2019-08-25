import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    loggedIn: boolean = false;

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                // console.log('resolve: ', resolve);
                // console.log('reject: ', reject);
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 300);
            }
        );
        return promise;
    }
}
