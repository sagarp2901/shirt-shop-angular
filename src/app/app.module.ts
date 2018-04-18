import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Routing
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ConfigComponent } from './components/config/config.component';

// Services
import { CommonService } from "./services/common.service";
import { ShippingComponent } from './components/shipping/shipping.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'shipping', component: ShippingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    NavbarComponent,
    CatalogComponent,
    ConfigComponent,
    ShippingComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
