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
    new Recipe('Paneer Sandwich', 'Paneer patty with vegetables and sauces', 'https://d3tfnts8u422oi.cloudfront.net/386x386/priya-mani1466521594576957faffd23.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit() {
  }

}
