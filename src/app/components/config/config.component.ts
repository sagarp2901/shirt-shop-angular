import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../services/common.service";
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  shirt: any;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.newShirt();
  }

  newShirt() {
    this.shirt = {
      color: "blank",
      size: "S",
      gender: "m",
      style: "",
      price: 10
    }
  }

  updateColor(color) {
    this.shirt.color = color;
  }

  updateSize(size) {
    this.shirt.size = size;
  }

  updateGender(gender) {
    this.shirt.gender = gender;
  }

  renderShirt() {
    return "shirt-" + this.shirt.color + "-" + this.shirt.gender;
  }

  addToCart() {
    //Create a new copy everytime or each element in the array will get overwritten
    let shirt = Object.assign({}, this.shirt);
    this.commonService.addToCart(shirt);
  }

  saveToCalalog() {
    //Create a new copy everytime or each element in the array will get overwritten
    let shirt = Object.assign({}, this.shirt);
    this.commonService.addToCatalog(shirt);
  }

}
