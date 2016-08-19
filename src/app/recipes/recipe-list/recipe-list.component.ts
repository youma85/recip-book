import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe} from '../recipe';
import { RecipeItemComponent} from './recipe-item.component';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives:[RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
    recipes:Recipe[]=[];
    @Output() recipeSelected= new EventEmitter<Recipe>();
    recipe=new Recipe('Dummy','Dummy','http://thumbs2.ebaystatic.com/d/l225/m/mM5u2kVAYbs3IRlwPfl6uOA.jpg')
    constructor() { }

    ngOnInit() {
    }

    onSelected(recipe:Recipe){
      this.recipeSelected.emit(recipe);
    }
}
