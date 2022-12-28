import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer, Platform } from '@core/customer/models/customer-model';
import { environment } from '@environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private getPlatformUrl = environment.API_FORMS + '/platform/get-all';
  private customerUrl = environment.API_FORMS + '/customer';

  constructor(private http: HttpClient) {}

  getPlatforms(): Observable<Platform[]> {
    return this.http.get(this.getPlatformUrl).pipe(
      map((response) => {
        return response as Platform[];
      })
    );
  }

  saveCustomer(customer: Customer): Observable<Customer[]> {
    return this.http.post(this.customerUrl + '/save', customer).pipe(
      map((response) => {
        return response as Customer[];
      })
    );
  }
}
