import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// import { Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  editMode: boolean = false;
  editedIndexNumber: number;
  editedItem: Ingredients;
  @ViewChild('form', { static: true }) editForm: NgForm;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<fromApp.AppState>
  ) { }

  // @Output() ingredient = new EventEmitter<Ingredients>();

  ngOnInit() {
    this.subscription = this.store
      .select('shoppingList')
      .subscribe(stateData => {
        if (stateData.editedIngredientIndex > -1) {
          this.editMode = true;
          this.editedItem = stateData.editedIngredient;
          this.editForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        } else {
          this.editMode = false;
        }
      });

    /* this.subscription = this.shoppingListService.ingredientEdit.subscribe(
      (index: number) => {
        this.editedIndexNumber = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.editForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    ); */
  }

  addIngredients(formData: NgForm): void {
    // console.log(formData);
    const name = formData.value.name;
    const amount = formData.value.amount;
    if (name !== undefined && amount !== undefined) {
      if (this.editMode) {
        this.store.dispatch(
          new ShoppingListActions.UpdateIngredient(new Ingredients(name, Number(amount)))
        );
        // this.shoppingListService.updateIngredient(this.editedIndexNumber, new Ingredients(name, Number(amount)));
      } else {
        this.store.dispatch(new ShoppingListActions.AddIngredient(new Ingredients(name, Number(amount))));
        // this.shoppingListService.addIngredient(new Ingredients(name, Number(amount)));
      }
    }
    this.editMode = false;
    formData.reset();
  }

  resetFormData(): void {
    this.editForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onDelete(): void {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    // this.shoppingListService.deleteIngredient(this.editedIndexNumber);
    this.resetFormData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  /* comment this approach to add template driven forms
  addIngredients(name: HTMLInputElement, amount: HTMLInputElement) {
    if (name !== undefined && amount !== undefined) {
      // this.ingredient.emit(new Ingredients(name.value, Number(amount.value)));
      this.shoppingListService.addIngredient(new Ingredients(name.value, Number(amount.value)));
    }
  } */

  /* alternate approach: i/p from ViewChild, html click element target will be method w/o param
  @ViewChild('nameInput', {static: false}) name: ElementRef;
  @ViewChild('amountInput', {static: false}) amount: ElementRef;
  addIngredientsWithoutParams() {
    const obj = new Ingredients(this.name.nativeElement.value, this.amount.nativeElement.value);
  }
  */
}
