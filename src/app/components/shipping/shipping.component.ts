import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { COUNTRIES, REGIONS } from "../../models/countries-regions.model";
import { Router } from "@angular/router";
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  private states = REGIONS;
  private countries = COUNTRIES;

  shippingForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.shippingForm = formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      address: [null, Validators.required],
      city: [null, Validators.required],
      country: ["", Validators.required],
      state: ["", Validators.required],
      zip: [null, Validators.required],
      instructions: [null],
    });
  }

  ngOnInit() {
  }

  submitOrder() {
    this.router.navigateByUrl("/confirmation");
  }

}
