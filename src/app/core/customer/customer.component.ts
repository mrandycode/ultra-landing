import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyType } from './models/customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: [],
})
export class CustomerComponent implements OnInit {
  customerForm!: FormGroup;
  companyTypes!: CompanyType[];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.builderForms();
  }

  builderForms(): void {
    this.customerForm = this.formBuilder.group({
      companyName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      contactName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      mobile: ['', [Validators.maxLength(50)]],
      phone: ['', [Validators.maxLength(50)]],
      email: ['', [Validators.maxLength(64), Validators.email]],
      message: [''],
      companyType: [[]],
      platform: [[], [Validators.required]],
      country: ['', [Validators.required]],
    });
  }
  getCompanyTypes(): void{}

  send(): void {}
}
