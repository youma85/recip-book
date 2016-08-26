import { Injectable } from '@angular/core';

import { Recipe} from './recipe';
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
	   new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',[
	     new Ingredient('french fries',2),
       new Ingredient('meat',1),
     ]),
	   new Recipe('Summer Salad', 'Okay', 'http://i.huffpost.com/gen/3075192/images/o-SUMMER-SALAD-facebook.jpg',[])
    ];

    constructor() { }

    getRecipes(){
        return this.recipes;
    }

  getRecipe(id:number){
    return this.recipes[id];
  }

  deleteRecipe(recipe:Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }
  
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
  }
  
  editRecipe(oldRecipe:Recipe,newRecipe:Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)]=newRecipe;
  }
}
