import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ingredientsModelArray: Ingredients[] = [
    new Ingredients('paneer', 4),
    new Ingredients('paratha', 1),
    new Ingredients('mix-veggies', 4),
    new Ingredients('spices', 3)
  ];

}
