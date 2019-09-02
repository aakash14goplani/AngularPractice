import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    private recipeModelArray: Recipe[] = [ // tslint:disable-next-line: max-line-length
        new Recipe('Paneer Roll', 'Paratha wrap with paneer filings', 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Paneer_Tikka_in_India.jpg', [new Ingredients('roti', 1), new Ingredients('paneer', 4), new Ingredients('vegetables', 3)]),
        // tslint:disable-next-line: max-line-length
        new Recipe('Paneer Sandwich', 'Paneer patty with vegetables and sauces', 'https://d3tfnts8u422oi.cloudfront.net/386x386/priya-mani1466521594576957faffd23.jpg', [new Ingredients('bread slice', 2), new Ingredients('paneer paties', 1), new Ingredients('vegetables', 3)])
    ];

    // recipeSelected = new EventEmitter<Recipe>();
    recipeSelected = new Subject<Recipe>();

    getRecipes(): Recipe[] {
        return this.recipeModelArray.slice();
        /* return this.array would have passes ref of this array to outside world and hence they can modify our data
        returning array.slice() passes copy of ref and original array-data remains intact */
    }

    getRecipesById(i: number): Recipe {
        if (i >= 0 && i < this.recipeModelArray.length) {
            return this.recipeModelArray[i];
        } else {
            return this.recipeModelArray[0];
        }
    }

    constructor(private shoppingListService: ShoppingListService) {}

    addIngridentsToShoppingList(ingredient: Ingredients[]) {
        this.shoppingListService.ingredientsFromRecipe(ingredient);
    }
}
