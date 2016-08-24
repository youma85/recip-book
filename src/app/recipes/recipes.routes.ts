import {RouterConfig} from '@angular/router';
import {RecipeStartComponent} from './recipe-start.component';
import {RecipDetailComponent} from './recip-detail/recip-detail.component';
import {RecipeEditComponent} from './recipe-edit';


export const RECIPE_ROUTES:RouterConfig=[
    {path:'',component:RecipeStartComponent},
    {path:'new',component:RecipeEditComponent},
    {path:':id',component:RecipDetailComponent},
    {path:':id/edit',component:RecipeEditComponent}
]