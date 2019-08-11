import { Component, OnInit } from '@angular/core';
// import { Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  /* scenario used using @Input/@Output and changed after introducing service
  recipeModelArray: Recipe[] = [
    new Recipe('Paneer Roll', 'Paratha', 'https://upload.wikimedia.org'),
    new Recipe('Paneer Sandwich', 'Paneer', 'https://d3tfnts8u422oi.23.jpg')
  ]; */

  recipeModelArray: Recipe[] = [];
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  /* onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  } */

  ngOnInit() {
    this.recipeModelArray = this.recipeService.getRecipes();
  }

}
