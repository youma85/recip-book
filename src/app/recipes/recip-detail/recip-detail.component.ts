import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list";

@Component({
  moduleId: module.id,
  selector: 'rb-recip-detail',
  templateUrl: 'recip-detail.component.html'
})
export class RecipDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
}
