import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '@core/services/customer.service';
import { Platform } from './models/customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: [],
})
export class CustomerComponent implements OnInit {
  customerForm!: FormGroup;
  platforms!: Platform[];
  platformSelected!: Platform;
  platformsSelected: Platform[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.builderForms();
    this.getPlatforms();
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
      phone: ['', [Validators.maxLength(50)]],
      email: ['', [Validators.maxLength(64), Validators.email]],
      message: [''],
      companyType: [''],
      platforms: [[], [Validators.required]],
      country: ['', [Validators.required]],
    });
  }

  send(): void {}

  getPlatforms(): void {
    this.customerService.getProfessions().subscribe((response) => {
      this.platforms = response;
    });
  }
  setPlatforms(): void {
    if (this.platformsSelected.length < 100)
      this.platformsSelected.push(this.platformSelected);
  }

  deleteSkill(platform: Platform): void {
    const id = this.platformsSelected.findIndex(
      (platform_) => platform_.id === platform.id
    );
    this.platformsSelected.splice(id, 1);
  }

  hasOutPut(event: any, nameColumn: string): void {
    if (nameColumn === 'mobile') {
      this.customerForm.patchValue({ mobile: event });
    } else {
      this.customerForm.patchValue({ phone: event });
    }
  }

  hasError(event: any): void {
    if (!event && this.customerForm.value.phone !== '') {
      this.customerForm
        .get('phone')!
        .setErrors(['invalid_cell_phone', true]);
    }
  }
}
