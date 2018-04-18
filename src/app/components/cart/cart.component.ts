import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../services/common.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Array<any> = [];
  totalQuantity = 0;
  subTotal = 0;

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    this.createItemsFromCart();
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.commonService.removeFromCart(index);
    this.recalculateTotal();
  }

  updateQuantity(item, updateType) {
    if (updateType === 'increment') {
      item.quantity += 1;
    } else if (updateType === 'decrement' && item.quantity > 1) {
      item.quantity -= 1;
    }
    this.recalculateTotal();
  }

  createItemsFromCart() {
    let cart = this.commonService.getCart();
    if (cart) {
      this.items = cart;
      this.recalculateTotal();
    }
  }

  goToShipping() {
    this.commonService.setFinalOrderItems(this.items);
    this.router.navigateByUrl('/shipping');
  }

  recalculateTotal() {
    this.subTotal = 0;
    this.totalQuantity = 0;
    this.items.forEach(item => {
      item.subtotal = item.quantity * item.price;
      this.totalQuantity += item.quantity;
      this.subTotal += item.subtotal;
    });
  }



}
