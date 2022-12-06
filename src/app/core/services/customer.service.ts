import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@core/customer/models/customer-model';
import { environment } from '@environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private getPlatformUrl = environment.humanResourceHost + '/platform';
  
  constructor(private http: HttpClient) {}

  getProfessions(): Observable<Platform[]> {
    return this.http.get(this.getPlatformUrl).pipe(
      map((response) => {
        return response as Platform[];
      })
    );
  }

  
}
