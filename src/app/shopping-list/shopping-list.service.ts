import { Injectable, EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {

    private ingredientsModelArray: Ingredients[] = [
        new Ingredients('paneer', 4),
        new Ingredients('paratha', 1),
        new Ingredients('mix-veggies', 4),
        new Ingredients('spices', 3)
    ];

    // ingredientsChanged = new EventEmitter<Ingredients[]>();
    ingredientsChanged = new Subject<Ingredients[]>();
    ingredientEdit = new Subject<number>();

    public getIngredients(): Ingredients[] {
        return this.ingredientsModelArray.slice();
    }

    public getIngredient(index: number): Ingredients {
        return this.ingredientsModelArray[index];
    }

    public updateIngredient(index: number, ingredient: Ingredients) {
        this.ingredientsModelArray[index] = ingredient;
        this.ingredientsChanged.next(this.ingredientsModelArray.slice());
    }

    public deleteIngredient(index: number): void {
        this.ingredientsModelArray.splice(index, 1);
        this.ingredientsChanged.next(this.ingredientsModelArray.slice());
    }

    public addIngredient(newIngredient: Ingredients) {
        if (newIngredient.name.length > 0 && newIngredient.amount !== 0) {
            const elePos = this.avoidDuplicate(newIngredient.name);
            if (elePos === -1) {
                this.ingredientsModelArray.push(newIngredient);
                // this.ingredientsChanged.emit(this.ingredientsModelArray.slice());
                this.ingredientsChanged.next(this.ingredientsModelArray.slice());
            } else {
                this.ingredientsModelArray[elePos - 1].amount += newIngredient.amount;
            }
        }
    }

    private avoidDuplicate(ingredientName: string): number {
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

    public ingredientsFromRecipe(ingredients: Ingredients[]) {
        /* this approach fires multiple events which may blow up application, instead we can add all our ingredients
        in a list and then fire single event */
        for (const ingredient of ingredients) {
            this.addIngredient(ingredient);
        }

        /* this is the ideal approach where we add multiple ingredients in one go and then emit event to let
        component know that something has changed
        this.ingredientsModelArray.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredientsModelArray.slice()); */
    }
}
