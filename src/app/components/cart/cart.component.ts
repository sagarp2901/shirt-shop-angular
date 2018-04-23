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
  totalPrice = 0;

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

  reviewOrder() {
    let finalOrder = {
      items: this.items,
      totalQuantity: this.totalQuantity,
      totalPrice: this.totalPrice
    }
    this.commonService.setFinalOrderItems(finalOrder);
    this.router.navigateByUrl('/review');
  }

  recalculateTotal() {
    this.totalPrice = 0;
    this.totalQuantity = 0;
    this.items.forEach(item => {
      item.subtotal = item.quantity * item.price;
      this.totalQuantity += item.quantity;
      this.totalPrice += item.subtotal;
    });
  }



}
