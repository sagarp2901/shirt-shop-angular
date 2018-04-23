import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CommonService } from "../../services/common.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  signupSuccessful: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router, private commonService: CommonService) {
    this.signupForm = formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      mobile: [null]
    });
  }

  ngOnInit() {
  }

  signup() {
    this.commonService.setUser(this.signupForm.value);
    this.router.navigateByUrl('/shipping');

  }

}
