import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {ShoppingListService} from "./app/shopping-list";
import {APP_ROUTES_PROVIDERS} from "./app/app.routes";
import {disableDeprecatedForms, provideForms} from "@angular/forms";



if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[ShoppingListService,APP_ROUTES_PROVIDERS]);

bootstrap(AppComponent, [
  ShoppingListService,
  APP_ROUTES_PROVIDERS,
  disableDeprecatedForms(), // disabled old forms
  provideForms() // enables new forms
]);
