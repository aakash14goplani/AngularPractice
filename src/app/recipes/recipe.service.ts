import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable()
export class RecipeService {

    /* comment static data, fetch dynamic data from firebase using http
    private recipeModelArray: Recipe[] = [
        new Recipe(
            'Paneer Roll',
            'Paratha wrap with paneer filings',
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/Paneer_Tikka_in_India.jpg',
            [
                new Ingredients('roti', 1),
                new Ingredients('paneer', 4),
                new Ingredients('vegetables', 3)
            ]
        ),
        new Recipe(
            'Paneer Sandwich',
            'Paneer patty with vegetables and sauces',
            'https://d3tfnts8u422oi.cloudfront.net/386x386/priya-mani1466521594576957faffd23.jpg',
            [
                new Ingredients('bread slice', 2),
                new Ingredients('paneer paties', 1),
                new Ingredients('vegetables', 3)
            ]
        )
    ]; */
    private recipeModelArray: Recipe[] = [];

    constructor(
        private shoppingListService: ShoppingListService,
        private store: Store<fromShoppingList.AppState>
    ) {}

    // recipeSelected = new EventEmitter<Recipe>();
    recipeSelected = new Subject<Recipe>();
    recipeChanged = new Subject<Recipe[]>();

    public getRecipes(): Recipe[] {
        return this.recipeModelArray.slice();
        /* return this.array would have passes ref of this array to outside world and hence they can modify our data
        returning array.slice() passes copy of ref and original array-data remains intact */
    }

    public getRecipesById(i: number): Recipe {
        if (i >= 0 && i < this.recipeModelArray.length) {
            return this.recipeModelArray[i];
        } else {
            return this.recipeModelArray[0];
        }
    }

    public addIngridentsToShoppingList(ingredient: Ingredients[]) {
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingredient));
        // this.shoppingListService.ingredientsFromRecipe(ingredient);
    }

    public updateRecipe(index: number, recipe: Recipe): void {
        if (index >= 0 && index < this.recipeModelArray.length && recipe != null) {
            this.recipeModelArray[index] = recipe;
            this.recipeChanged.next(this.recipeModelArray.slice());
        } else {
            console.log('invalid params passed to updateRecipe method of recipe service: ', index, ' ', recipe);
        }
    }

    public addRecipe(recipe: Recipe): void {
        if (recipe != null) {
            this.recipeModelArray.push(recipe);
            this.recipeChanged.next(this.recipeModelArray.slice());
        }
    }

    public setRecipes(recipes: Recipe[]): void {
        this.recipeModelArray = recipes;
        this.recipeChanged.next(this.recipeModelArray.slice());
    }

    public deleteRecipe(index: number): void {
        if (index >= 0 && index < this.recipeModelArray.length) {
            this.recipeModelArray.splice(index, 1);
            this.recipeChanged.next(this.recipeModelArray);
        }
    }
}
