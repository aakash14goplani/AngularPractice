import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
  /* providers: [RecipeService]:
  recipe vanish as soon as we browse to shopping list and come back to recipe as service
  instance is shared amongst recipe components only, so move this to app module so that
  every component can access this */
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  // selectedRecipe: Recipe;

  ngOnInit() {
    /* this.recipeService.recipeSelected.subscribe(
      (recipe) => {
        this.selectedRecipe = recipe;
      }
    ); */
  }

}
