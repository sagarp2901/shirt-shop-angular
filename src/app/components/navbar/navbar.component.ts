import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../services/common.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  catalogCount = 0;
  cartCount = 0;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.catalogUpdated.subscribe(shirts => {
      this.catalogCount = shirts.length;
    });

    this.commonService.cartUpdated.subscribe(shirts => {
      this.cartCount = shirts.length;
    });
  }

}
