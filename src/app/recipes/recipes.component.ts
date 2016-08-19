import { Component, OnInit } from '@angular/core';
import { RecipeListComponent} from './recipe-list';
import {RecipDetailComponent} from "./recip-detail";
import {Recipe} from "./recipe";

@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  directives:[RecipeListComponent,RecipDetailComponent]
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
