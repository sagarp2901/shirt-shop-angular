import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Array<any> = [
    { itemNo: '1486', description: '$10 - small - men - none - placeholder', quantity: 3, subtotal: 30 },
    { itemNo: '8386', description: '$10 - small - men - white - cool', quantity: 2, subtotal: 20 }
  ];

  constructor() { }

  ngOnInit() {
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  updateQuantity(item, updateType) {
    if (updateType === 'increment') {
      item.quantity += 1;
    } else if (updateType === 'decrement' && item.quantity > 1) {
      item.quantity -= 1;
    }
  }



}
