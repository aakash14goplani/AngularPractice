import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './auth/user-auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`h1 { text-align: center;}`]
})
export class AppComponent implements OnInit {
  title = 'angular-basics';
  /* displayDataFor: string = 'recipe';

  contentsToDisplay(eventData: string) {
    this.displayDataFor = eventData;
  } */

  constructor(
    private authService: UserAuthService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    // this.authService.autoLogin();
    this.store.dispatch(new AuthActions.AutoLogin());
  }
}
