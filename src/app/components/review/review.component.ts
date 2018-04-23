import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../services/common.service";
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  finalCart: any;
  address: any;
  user: any;
  hasDifferentAddress: boolean = false;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.finalCart = this.commonService.getFinalOrderItems();
    this.address = this.commonService.getAddress();
    this.user = this.commonService.getUser();
  }

  differentAddress() {
    this.hasDifferentAddress = !this.hasDifferentAddress;
  }
}
