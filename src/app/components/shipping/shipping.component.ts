import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { COUNTRIES, REGIONS } from "../../models/countries-regions.model";
import { Router } from "@angular/router";

import { CommonService } from "../../services/common.service";
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  private states = REGIONS;
  private countries = COUNTRIES;

  shippingForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private commonService: CommonService) {
    this.shippingForm = formBuilder.group({
      /* firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required], */
      address: [null, Validators.required],
      city: [null, Validators.required],
      country: ["", Validators.required],
      state: ["", Validators.required],
      zip: [null, Validators.required],
      instructions: [""],
    });
  }

  ngOnInit() {
    let address = this.commonService.getAddress();
    if (address) {
      this.shippingForm.setValue(address);
    }
  }

  /* submitOrder() {
    this.commonService.setAddress(this.shippingForm.value);
    this.router.navigateByUrl("/confirmation");
  } */

  saveAddress() {
    this.commonService.setAddress(this.shippingForm.value);
    this.router.navigateByUrl("/home");
  }

}
