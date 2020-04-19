import { Ingredients } from '../../shared/ingredients.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface State {
    ingredients: Ingredients[];
    editedIngredient: Ingredients;
    editedIngredientIndex: number;
}

const initialState: State = {
    ingredients: [
        new Ingredients('paneer', 4),
        new Ingredients('paratha', 1),
        new Ingredients('mix-veggies', 4),
        new Ingredients('spices', 3)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

export function shoppingListReducer(state: State = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT: 
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };

        case ShoppingListActions.ADD_INGREDIENTS: 
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };

        case ShoppingListActions.UPDATE_INGREDIENTS:
            // fetch current ingredient
            const oldIngredient = state.ingredients[action.payload.index];
            // immutable change - create new object, copy existing data, add new data from payload so the updatedData consist data to be updated
            const updatedIngredient = {
                ...oldIngredient,
                ...action.payload.ingredient
            };
            // we need array in template, fetch existing ingredients
            const updatedIngredients = [...state.ingredients];
            // update array with new ingredient
            updatedIngredients[action.payload.index] = updatedIngredient;
            return {
                ...state,
                ingredients: updatedIngredients
            };

        case ShoppingListActions.DELETE_INGREDIENTS:
            return {
                ...state,
                // filter return new array with filtered items
                ingredients: state.ingredients.filter((currentIngredient, currentIngredientIndex) => {
                    return currentIngredientIndex !== action.payload;
                  })
            };

        case ShoppingListActions.START_EDIT:
            return {
                ...state,
                editedIngredientIndex: action.payload,
                editedIngredient: { ...state.ingredients[action.payload] }
            };

        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            };

        default: return initialState;
    }
}