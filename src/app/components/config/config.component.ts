import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../services/common.service";
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  shirt;

  constructor(private commonService: CommonService) {
    this.shirt = {
      color: "blank",
      size: "S",
      gender: "m",
      style: "",
      price: 10
    }

  }

  ngOnInit() {
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
    this.commonService.addToCart(this.shirt);
  }

  saveToCalalog() {
    this.commonService.addToCatalog(this.shirt);
  }

}
