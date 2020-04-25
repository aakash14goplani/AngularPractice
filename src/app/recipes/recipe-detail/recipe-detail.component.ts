import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/app.reducer';
import * as RecipesActions from '../store/recipe.actions';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(
    // private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromStore.AppState>
  ) { }

  // @Input() recipe: Recipe;
  recipe: Recipe;
  recipeId: number;

  ngOnInit() {
    /* using services
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = +params.id;
        this.recipe = this.recipeService.getRecipesById(this.recipeId);
      }
    ); */

    /* using store - method 1
    this.recipeId = +this.route.snapshot.params.id;
    this.store.select('recipe')
      .pipe(
        map(recipeData => {
          console.log('recipeData.recipe: ', recipeData.recipe);
          return recipeData.recipe.find((recipe, index) => {
            return index === this.recipeId;
          });
        })
      )
      .subscribe(recipe => {
        this.recipe = recipe;
        console.log('recipe: ', this.recipe);
      }); */

    /* method 2 - one single big observable */
    this.route.params
      .pipe(
        map(params => {
          return +params['id'];
        }),
        switchMap(id => {
          this.recipeId = id;
          return this.store.select('recipe');
        }),
        map(recipesState => {
          return recipesState.recipes.find((recipe, index) => {
            return index === this.recipeId;
          });
        })
      )
      .subscribe(recipe => {
        this.recipe = recipe;
      });
  }

  onSelectToShoppingList(): void {
    // this.recipeService.addIngridentsToShoppingList(this.recipe.ingredients);
    this.store.dispatch(
      new ShoppingListActions.AddIngredients(this.recipe.ingredients)
    );
  }

  onEditRecipe(): void {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(): void {
    // this.recipeService.deleteRecipe(this.recipeId);
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.recipeId));
    this.router.navigate(['/recipes']);
  }
}
