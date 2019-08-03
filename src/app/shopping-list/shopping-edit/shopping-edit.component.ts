import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  @Output() ingredient = new EventEmitter<Ingredients>();

  ngOnInit() {
  }

  addIngredients(name: HTMLInputElement, amount: HTMLInputElement) {
    if (name !== undefined && amount !== undefined) {
      this.ingredient.emit(new Ingredients(name.value, Number(amount.value)));
    }
  }

  /* alternate approach: i/p from ViewChild, html click element target will be method w/o param
  @ViewChild('nameInput', {static: false}) name: ElementRef;
  @ViewChild('amountInput', {static: false}) amount: ElementRef;
  addIngredientsWithoutParams() {
    const obj = new Ingredients(this.name.nativeElement.value, this.amount.nativeElement.value);
  }
  */
}
