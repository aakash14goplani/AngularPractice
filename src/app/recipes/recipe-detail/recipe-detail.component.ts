import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  // @Input() recipe: Recipe;
  recipe: Recipe;
  recipeId: number;

  ngOnInit() {
    this.recipeId = +this.route.snapshot.params.id;
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = +params.id;
        this.recipe = this.recipeService.getRecipesById(this.recipeId);
      }
    );
  }

  onSelectToShoppingList() {
    this.recipeService.addIngridentsToShoppingList(this.recipe.ingredients);
  }

}
