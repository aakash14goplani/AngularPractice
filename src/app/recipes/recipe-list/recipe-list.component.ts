import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/app.reducer'; 
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  /* scenario used using @Input/@Output and changed after introducing service
  recipeModelArray: Recipe[] = [
    new Recipe('Paneer Roll', 'Paratha', 'https://upload.wikimedia.org'),
    new Recipe('Paneer Sandwich', 'Paneer', 'https://d3tfnts8u422oi.23.jpg')
  ]; */

  recipeModelArray: Recipe[] = [];
  private subscription: Subscription;
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(
    // private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromStore.AppState>
  ) { }

  /* onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  } */

  ngOnInit() {
    this.subscription = this.store
      .select('recipe')
      .pipe(map(recipesState => recipesState.recipes))
      .subscribe((recipes: Recipe[]) => {
        this.recipeModelArray = recipes;
    });
    // this.recipeModelArray = this.recipeService.getRecipes();
  }

  createNewRecipe(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
