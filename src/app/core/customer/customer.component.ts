import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '@core/services/country.service';
import { CustomerService } from '@core/services/customer.service';
import { Country } from 'src/app/shared/models/shared-models';
import { Platform } from './models/customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customerForm!: FormGroup;
  platforms!: Platform[];
  countries!: Country[];
  platformSelected!: Platform;
  platformsSelected: Platform[] = [];
  countrySelected!: Country;
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.builderForms();
    this.getPlatforms();
    this.getCountries();
  }

  builderForms(): void {
    this.customerForm = this.formBuilder.group({
      id: [0],
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
      countryId: [0, [Validators.required]],
    });
  }

  send(): void {
    this.customerForm.get('platforms')?.setValue(this.convertPlatforms());
    console.log(this.customerForm.value, 'asdasds')
    this.customerService
      .saveCustomer(this.customerForm.value)
      .subscribe((response) => {
        this.resetControls();
      });
  }

  convertPlatforms(): Platform[] {
    let platforms = new Array<Platform>();
    this.platformsSelected.forEach((platform) => {
      platforms.push({ platformId: platform.id });
    });
    return platforms;
  }

  getPlatforms(): void {
    this.customerService.getPlatforms().subscribe((response) => {
      this.platforms = response;
    });
  }

  setPlatforms(): void {
    if (this.platformsSelected.length < 100) {

      this.platformsSelected.push(this.platformSelected);
    }
  }

  deleteSkill(platform: Platform): void {
    const id = this.platformsSelected.findIndex(
      (platform_) => platform_.id === platform.id
    );
    this.platformsSelected.splice(id, 1);
  }

  getCountries(): void {
    this.countryService
      .getCountries()
      .subscribe((response) => [(this.countries = response)]);
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
      this.customerForm.get('phone')!.setErrors(['invalid_cell_phone', true]);
    }
  }

  resetControls(): void {
    this.customerForm.reset();
    this.platformsSelected = [];
  }
}
