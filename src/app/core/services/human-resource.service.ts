import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { HumanResourceResponse } from '@core/human-resource/models/human-resource-model-responses';
import { Profession } from '@core/human-resource/models/human-resource-model';

@Injectable({
  providedIn: 'root',
})
export class HumanResourceService {
  private getProfessionUrl = environment.humanResourceHost + '/professions';
  
  constructor(private http: HttpClient) {}

  getProfessions(): Observable<Profession[]> {
    // const params = new HttpParams().append(
    //   'RequestJson',
    //   JSON.stringify(transactionRequestStores)
    // );
    return this.http.get(this.getProfessionUrl).pipe(
      map((response) => {
        return response as Profession[];
      })
    );
  }
}
