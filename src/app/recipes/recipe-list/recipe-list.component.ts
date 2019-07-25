import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeModelArray: Recipe[] = [ // tslint:disable-next-line: max-line-length
    new Recipe('Paneer Roll', 'Paratha wrap with paneer filings', 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Paneer_Tikka_in_India.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }

}
