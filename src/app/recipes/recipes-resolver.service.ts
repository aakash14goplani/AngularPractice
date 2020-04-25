import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.model';
// import { DataStorageService } from '../shared/data-storage.service';
import { Observable, of } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators';
// import { RecipeService } from './recipe.service';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipe.actions';

@Injectable()
export class RecipesResolverService implements Resolve<Recipe[]> {

  constructor(
    // private dataStorageService: DataStorageService,
    // private recipesService: RecipeService,
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> {
    /* const recipes = this.recipesService.getRecipes();
    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    } */

    /* resolver expects an observable as a return value and it waits for this observable to complete before it loads the route for which you added this resolver.
    The problem is, when we dispatch an action, we don't get back an observable and therefore resolve would instantly resolve and we would instantly load a route where the data is actually not there yet. */
    return this.store.select('recipe').pipe(
      take(1),
      map(recipesState => {
        return recipesState.recipes;
      }),
      switchMap(recipes => {
        if (recipes.length === 0) {
          this.store.dispatch(new RecipesActions.FetchRecipes());
          return this.actions$.pipe(
            ofType(RecipesActions.SET_RECIPES),
            take(1)
          );
        } else {
          return of(recipes);
        }
      })
    );
  }
}
