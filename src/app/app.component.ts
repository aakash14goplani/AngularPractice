import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`h1 { text-align: center;}`],
  providers: [ShoppingListService]
})
export class AppComponent {
  title = 'angular-basics';
  /* displayDataFor: string = 'recipe';

  contentsToDisplay(eventData: string) {
    this.displayDataFor = eventData;
  } */
}
