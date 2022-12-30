import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { map, Observable } from 'rxjs';
import { Country } from 'src/app/shared/models/shared-models';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private countryUrl = environment.API_FORMS + '/countries';
  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get(this.countryUrl + '/get-all').pipe(
      map((response) => {
        return response as Country[];
      })
    );
  }
}
