import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import { Recipe} from '../recipe';
import { RecipeItemComponent} from './recipe-item.component';
import { RecipeService} from '../recipe.service';


@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives:[RecipeItemComponent,ROUTER_DIRECTIVES]
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];
    //@Output() recipeSelected= new EventEmitter<Recipe>();
    //recipe=new Recipe('Dummy','Dummy','http://thumbs2.ebaystatic.com/d/l225/m/mM5u2kVAYbs3IRlwPfl6uOA.jpg')

    constructor(private recipeService:RecipeService) { }

    ngOnInit() {
        this.recipes=this.recipeService.getRecipes();
    }
}
