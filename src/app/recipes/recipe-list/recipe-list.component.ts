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
    recipes: Recipe[] = [
	   new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',[]),
	   new Recipe('Summer Salad', 'Okay', 'http://i.huffpost.com/gen/3075192/images/o-SUMMER-SALAD-facebook.jpg',[])
    ];
    @Output() recipeSelected= new EventEmitter<Recipe>();
    //recipe=new Recipe('Dummy','Dummy','http://thumbs2.ebaystatic.com/d/l225/m/mM5u2kVAYbs3IRlwPfl6uOA.jpg')
    constructor() { }

    ngOnInit() {
    }

    onSelected(recipe:Recipe){
      this.recipeSelected.emit(recipe);
    }
}
