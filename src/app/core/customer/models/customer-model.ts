export interface Customer {
  id: number;
  companyName: string;
  contactName: string;
  mobile: string;
  phone: number;
  message: number;
  companyType: number;
  platform: Platform[];
  countryId: string;
}

export interface Platform {
  id?: number;
  platformId?: number;
  name?: string;
}
export interface CompanyType {
  id: number;
  name: string;
}
