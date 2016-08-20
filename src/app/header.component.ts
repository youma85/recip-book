import { Component, OnInit } from '@angular/core';
import {DropdownDirectives} from "./dropdown.directive";

@Component({
  moduleId: module.id,
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  directives:[DropdownDirectives]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
