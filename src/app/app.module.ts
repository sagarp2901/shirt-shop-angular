import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routing
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
