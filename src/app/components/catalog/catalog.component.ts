import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from "../../services/common.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  @Input()
  catalog: Array<any>;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.catalog = this.commonService.getCatalog();
  }

  renderShirt(shirt) {
    return "shirt-" + shirt.color + "-" + shirt.gender;
  }

  addToCart(shirt) {
    // Create an item for adding it to the cart
    let item = {
      itemNo: Math.floor(1000 + Math.random() * 9000),
      description: "$" + shirt.price + " - " + shirt.size + " - " + shirt.gender + " - " + shirt.color,
      quantity: 1,
      subtotal: 0
    };
    this.commonService.addToCart(item);
  }

  removeItem(item) {
    const index = this.catalog.indexOf(item);
    this.commonService.removeFromCatalog(index);
  }

}
