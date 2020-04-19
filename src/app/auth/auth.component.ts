import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService, AuthResponsePayload } from './user-auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertSharedComponent } from '../shared/alert-shared/alert-shared.component';
import { PlaceholderDirective } from '../shared/placeholder.directive';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor(
    private authService: UserAuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
    private store: Store<fromApp.AppState>
  ) { }

  isLoginMode: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';
  authObservable: Observable<AuthResponsePayload>;
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
  alertSubscription: Subscription;

  ngOnInit() { 
    this.store.select('auth').subscribe(
      authData => {
        this.isLoading = authData.loading;
        this.errorMessage = (authData.authError) ? authData.authError : '';
        if (this.errorMessage) {
          this.showAlertError(this.errorMessage);
        }
      }
    );
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
      // this.authObservable = this.authService.login(email, password);
      this.store.dispatch(
        new AuthActions.LoginStart({email, password})
      );
    } else {
      // signup
      this.authObservable = this.authService.signup(email, password);
    }

    /* this.authObservable.subscribe(
      responseData => {
        // console.log('response: ', responseData);
        this.errorMessage = '';
        this.showAlertError('');
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMsg => {
        // console.log('error: ', errorMsg);
        this.isLoading = false;
        this.errorMessage = errorMsg;
        this.showAlertError(errorMsg);
      }
    ); */

    authForm.reset();
  }

  closePopUp(): void {
    this.errorMessage = '';
  }

  private showAlertError(errorMessage: string): void {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertSharedComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);
    componentRef.instance.message = errorMessage;
    this.alertSubscription = componentRef.instance.closePopUp.subscribe(() => {
      this.alertSubscription.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    if (this.alertSubscription) {
      this.alertSubscription.unsubscribe();
    }
  }

}
