import { Injectable } from '@angular/core';

import { Recipe} from './recipe';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
	   new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',[]),
	   new Recipe('Summer Salad', 'Okay', 'http://i.huffpost.com/gen/3075192/images/o-SUMMER-SALAD-facebook.jpg',[])
    ];
    
    constructor() { }
    
    getRecipes(){
        return this.recipes;
    }
}
