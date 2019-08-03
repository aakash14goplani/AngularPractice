import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeModelArray: Recipe[] = [ // tslint:disable-next-line: max-line-length
    new Recipe('Paneer Roll', 'Paratha wrap with paneer filings', 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Paneer_Tikka_in_India.jpg'),
    // tslint:disable-next-line: max-line-length
    new Recipe('Paneer Sandwich', 'Paneer patty with vegetables and sauces', 'https://cdn.pixabay.com/photo/2017/05/31/02/56/food-photography-2358904_960_720.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit() {
  }

}
