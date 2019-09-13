import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) { }

  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  ngOnInit() {
    this.id = +this.route.snapshot.params.id;
    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param.id;
        this.editMode = param.id != null;
        this.initForm();
      }
    );
  }

  initForm(): void {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipesById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (Boolean(recipe.ingredients)) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      ingredients: recipeIngredients
    });
  }

  addIngredients(): void {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onSubmit(): void {
    console.log(this.recipeForm);
    const newRecipe = new Recipe(
      this.recipeForm.value.name, this.recipeForm.value.description, this.recipeForm.value.imagePath, this.recipeForm.value.ingredients);

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
      /* this.recipeService.updateRecipe(this.id, this.recipeForm.value);
      sice our form vale control name are same as that of model */
    } else {
      this.recipeService.addRecipe(newRecipe);
    }

    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onCancel(): void {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number): void {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }
}
