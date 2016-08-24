import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {DropdownDirectives} from "./dropdown.directive";

@Component({
  moduleId: module.id,
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  directives:[DropdownDirectives,ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
