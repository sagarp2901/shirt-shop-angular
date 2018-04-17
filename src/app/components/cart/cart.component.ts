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
    this.items.splice(index, 1);
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
      cart.forEach(cartItem => {
        let item = {
          itemNo: Math.floor(1000 + Math.random() * 9000),
          description: "$" + cartItem.price + " - " + cartItem.size + " - " + cartItem.gender + " - " + cartItem.color,
          quantity: 1,
          subtotal: 100
        };

        this.items = [...this.items, item];
      });
    }
  }



}
