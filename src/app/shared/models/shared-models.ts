export class Country {
  id?: number | null;
  code!: string;
  name!: string;
  currency!: string;
  currencySymbol!: string;
  createdDate!: Date;
  updatedDate!: Date;
}
