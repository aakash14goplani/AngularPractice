/* import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class RecipeService {
    private recipeModelArray: Recipe[] = [];

    constructor(
        private shoppingListService: ShoppingListService,
        private store: Store<fromApp.AppState>
    ) {}

    // recipeSelected = new EventEmitter<Recipe>();
    recipeSelected = new Subject<Recipe>();
    recipeChanged = new Subject<Recipe[]>();

    public getRecipes(): Recipe[] {
        return this.recipeModelArray.slice(); */
        /* return this.array would have passes ref of this array to outside world and hence they can modify our data
        returning array.slice() passes copy of ref and original array-data remains intact */
    /* }

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
}*/
