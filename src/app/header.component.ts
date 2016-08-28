import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { DropdownDirectives } from "./dropdown.directive";
import { RecipeService } from "./recipes/recipe.service";

@Component({
  moduleId: module.id,
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  directives: [DropdownDirectives, ROUTER_DIRECTIVES]
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) {}

  onStore() {
    this.recipeService.storeData().subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

  onFetch() {
    this.recipeService.fetchData();
  }

}
