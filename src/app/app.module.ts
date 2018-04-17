import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routing
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ConfigComponent } from './components/config/config.component';

// Services
import { CommonService } from "./services/common.service";

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'config', component: ConfigComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    NavbarComponent,
    CatalogComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
