import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

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

  ingredientsModelArray: Ingredients[] = [];
  subjectIngredientsSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subjectIngredientsSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredient: Ingredients[]) => {
        this.ingredientsModelArray = ingredient;
        console.log('subscribing: ', this.ingredientsModelArray.length);
      }
    );
    this.ingredientsModelArray = this.shoppingListService.getIngredients();
    console.log('init shopping list: ', this.ingredientsModelArray.length);
  }

  onEditIngredient(id: number): void {
    this.shoppingListService.ingredientEdit.next(id);
  }

  ngOnDestroy(): void {
    this.subjectIngredientsSubscription.unsubscribe();
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
