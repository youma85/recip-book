import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  moduleId: module.id,
  selector: 'rb-recip-detail',
  templateUrl: 'recip-detail.component.html'
})
export class RecipDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
