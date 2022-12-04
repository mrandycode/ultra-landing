export interface Customer {
  companyName: string;
  contactName: string;
  mobile: string;
  phone: number;
  message: number;
  companyType: number;
  platform: Platform[];
  country: string;
}

export interface Platform {
  id: number;
  name: string;
}
export interface CompanyType {
  id: number;
  name: string;
}
