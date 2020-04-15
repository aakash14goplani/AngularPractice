import { Action } from '@ngrx/store';
import { Ingredients } from 'src/app/shared/ingredients.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const DELETE_INGREDIENTS = 'DELETE_INGREDIENTS';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;
    constructor (public payload: Ingredients) { }
}

export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;
    constructor (public payload: Ingredients[]) { }
}

export class UpdateIngredients implements Action {
    readonly type = UPDATE_INGREDIENTS;
    constructor (public payload: {index: number, ingredient: Ingredients}) { }
}

export class DeleteIngredients implements Action {
    readonly type = DELETE_INGREDIENTS;
    constructor (public payload: number) { }
}

export type ShoppingListActions = 
    AddIngredient | 
    AddIngredients | 
    UpdateIngredients | 
    DeleteIngredients;
