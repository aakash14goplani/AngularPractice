import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  /* ingredientsModelArray: Ingredients[] = [
    new Ingredients('paneer', 4),
    new Ingredients('paratha', 1),
    new Ingredients('mix-veggies', 4),
    new Ingredients('spices', 3)
  ]; */

  ingredientsModelArray: Ingredients[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientsModelArray = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredient: Ingredients[]) => {
        this.ingredientsModelArray = ingredient;
      }
    );
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
