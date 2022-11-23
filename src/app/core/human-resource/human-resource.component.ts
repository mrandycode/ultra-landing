import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-human-resource',
  templateUrl: './human-resource.component.html',
  styles: [
  ]
})
export class HumanResourceComponent implements OnInit {

  contactUsForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.builderForms();
  }


  builderForms(): void {
    this.contactUsForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      genre: ['', [Validators.maxLength(1)]],
      mobile: ['', [Validators.maxLength(50)]],
      phone: ['', [Validators.maxLength(50)]],
      email: ['', [Validators.maxLength(64), Validators.email]],
      message: [''],
      country: ['', [Validators.required]],
    });
  }
}
