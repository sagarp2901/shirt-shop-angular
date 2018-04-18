import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../services/common.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Array<any> = [];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.createItemsFromCart();
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.commonService.removeFromCart(index);
  }

  updateQuantity(item, updateType) {
    if (updateType === 'increment') {
      item.quantity += 1;
    } else if (updateType === 'decrement' && item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  createItemsFromCart() {
    let cart = this.commonService.getCart();
    if (cart) {
      this.items = cart;
      this.commonService.setFinalOrderItems(this.items);
    }
  }



}
