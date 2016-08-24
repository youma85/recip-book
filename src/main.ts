import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {ShoppingListService} from "./app/shopping-list";
import {APP_ROUTES_PROVIDERS} from "./app/app.routes";



if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[ShoppingListService,APP_ROUTES_PROVIDERS]);
