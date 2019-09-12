import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  ngOnInit() {
    this.id = +this.route.snapshot.params.id;
    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param.id;
        this.editMode = param.id !== null;
        this.initForm();
      }
    );
  }

  initForm(): void {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipesById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImagePath),
      description: new FormControl(recipeDescription)
    });
  }

  onSubmit(): void {
    console.log(this.recipeForm);
  }
}
