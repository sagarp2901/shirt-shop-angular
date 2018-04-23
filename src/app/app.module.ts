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
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'catalog', component: CatalogComponent },
      { path: 'cart', component: CartComponent },
      { path: 'config', component: ConfigComponent },
    ]
  },
  { path: 'shipping', component: ShippingComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    NavbarComponent,
    CatalogComponent,
    ConfigComponent,
    ShippingComponent,
    ConfirmationComponent,
    SignupComponent,
    HomeComponent
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
