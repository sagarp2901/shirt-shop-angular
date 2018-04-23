import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  // Output to notify the parent home component
  @Output() signupStatus = new EventEmitter<any>();

  signupSuccessful: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.signupForm = formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      mobile: [null]
    });

    // this.signupSuccessful = false;
  }

  ngOnInit() {
  }

  signup() {
    // this.signupSuccessful = true;
    // Emit event for the home component to switch from signup to navbar
    // this.signupStatus.emit(this.signupSuccessful);
    this.router.navigateByUrl('/shipping');

  }

}
