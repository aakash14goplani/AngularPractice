import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './auth/user-auth.service';

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

  constructor(private authService: UserAuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
