import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { UserAuthService } from './auth/user-auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.action';
import { isPlatformBrowser } from '@angular/common';

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
    private store: Store<fromApp.AppState>,
    @Inject(PLATFORM_ID) private platformId
  ) {}

  ngOnInit(): void {
    // this.authService.autoLogin();
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(new AuthActions.AutoLogin());
    }
  }
}
