import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService, AuthResponsePayload } from './user-auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: UserAuthService, private router: Router) { }

  isLoginMode: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';
  authObservable: Observable<AuthResponsePayload>;

  ngOnInit() {
  }

  onSwithcMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm): void {
    if (!authForm.valid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;

    this.isLoading = true;
    if (this.isLoginMode) {
      // login
      this.authObservable = this.authService.login(email, password);
    } else {
      // signup
      this.authObservable = this.authService.signup(email, password);
    }

    this.authObservable.subscribe(
      responseData => {
        // console.log('response: ', responseData);
        this.isLoading = false;
        this.errorMessage = '';
        this.router.navigate(['/recipes']);
      },
      errorMsg => {
        // console.log('error: ', errorMsg);
        this.isLoading = false;
        this.errorMessage = errorMsg;
      }
    );

    authForm.reset();
  }

}
