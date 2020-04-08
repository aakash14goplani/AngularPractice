import { Ingredients } from '../../shared/ingredients.model';
import { ADD_INGREDIENT } from './shopping-list.actions';
import { Action } from '@ngrx/store';

const initialState = {
    ingredientsModelArray: [
        new Ingredients('paneer', 4),
        new Ingredients('paratha', 1),
        new Ingredients('mix-veggies', 4),
        new Ingredients('spices', 3)
    ]
};

export function shoppingListReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ADD_INGREDIENT: 
            return {
                ...state,
                ingredientsModelArray: [...state.ingredientsModelArray, action]
            };
    }
}
