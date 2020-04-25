/* import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { UserAuthService } from '../auth/user-auth.service';
import { Store } from '@ngrx/store';
import * as RecipeActions from '../recipes/store/recipe.actions';
import * as fromStore from '../store/app.reducer'; 

@Injectable()
export class DataStorageService {

  constructor(
    private http: HttpClient,
    // private recipeService: RecipeService,
    private authService: UserAuthService,
    private store: Store<fromStore.AppState>
  ) { } */

  /* storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://angular-practice-166c4.firebaseio.com/posts.json', recipes)
    .subscribe(response => {
      // console.log('Stored Recipes: ', response);
    });
  } */

  // fetchRecipes(): Observable<Recipe[]> {
    /*
    before authentication

    return this.http.get<Recipe[]>('https://angular-practice-166c4.firebaseio.com/posts.json')
    .pipe(
      map(recipes => {
        // console.log('Recipe before modification', recipes);
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }),
      tap(recipes => {
        // console.log('Recipe after modification', recipes);
        this.recipeService.setRecipes(recipes);
      })
    );

    adding authentication without interceptor

    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        return this.http.get<Recipe[]>(
          'https://angular-practice-166c4.firebaseio.com/posts.json',
          { params: new HttpParams().set('auth', user._token) }
        );
      }),
      map(recipes => {
        // console.log('Recipe before modification', recipes);
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }),
      tap(recipes => {
        // console.log('Recipe after modification', recipes);
        this.recipeService.setRecipes(recipes);
      })
    );
    */

    /* remove these comments
    return this.http
      .get<Recipe[]>('https://angular-practice-166c4.firebaseio.com/posts.json')
      .pipe(
        map(recipes => {
          // console.log('Recipe before modification', recipes);
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          // console.log('Recipe after modification', recipes);
          // this.recipeService.setRecipes(recipes);
          console.log('dispatching set recipes action: ', recipes);
          this.store.dispatch(new RecipeActions.SetRecipes(recipes));
        })
      );
  }
} */
