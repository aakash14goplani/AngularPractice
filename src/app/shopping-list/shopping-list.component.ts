import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  /* ingredientsModelArray: Ingredients[] = [
    new Ingredients('paneer', 4),
    new Ingredients('paratha', 1),
    new Ingredients('mix-veggies', 4),
    new Ingredients('spices', 3)
  ]; */

  // ingredientsModelArray: Ingredients[] = [];
  // subjectIngredientsSubscription: Subscription;

  ingredientsModelArray: Observable<{ ingredients: Ingredients[] }>;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.ingredientsModelArray = this.store.select('shoppingList');

    /* this.ingredientsModelArray = this.shoppingListService.getIngredients();
    this.subjectIngredientsSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredient: Ingredients[]) => {
        this.ingredientsModelArray = ingredient;
      }
    ); */
  }

  onEditIngredient(id: number): void {
    this.store.dispatch(new ShoppingListActions.StartEdit(id));
    // this.shoppingListService.ingredientEdit.next(id);
  }

  ngOnDestroy(): void {
    // this.subjectIngredientsSubscription.unsubscribe();
  }

  /*
  newIngredientItem(newIngredient: Ingredients) {
    if (newIngredient.name.length > 0 && newIngredient.amount !== 0) {
      const elePos = this.avoidDuplicate(newIngredient.name);
      if (elePos === -1) {
        this.ingredientsModelArray.push(new Ingredients(newIngredient.name, newIngredient.amount));
      } else {
        this.ingredientsModelArray[elePos - 1].amount++;
      }
    }
  }

  avoidDuplicate(ingredientName: string): number {
    let position = 0;
    let flag = false;
    for (const iterator of this.ingredientsModelArray) {
      if (iterator.name.toLowerCase() === ingredientName.toLowerCase()) {
        position++;
        flag = true;
        break;
      } else {
        position++;
      }
    }
    if (flag) {
      return position;
    } else {
      return -1;
    }
  }
  */

}
