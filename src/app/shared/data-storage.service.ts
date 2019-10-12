import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://angular-practice-166c4.firebaseio.com/posts.json', recipes)
    .subscribe(response => {
      // console.log('Stored Recipes: ', response);
    });
  }

  fetchRecipes(): Observable<Recipe[]> {
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
  }
}
