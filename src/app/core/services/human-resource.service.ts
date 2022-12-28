import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Profession, Skill } from '@core/human-resource/models/human-resource-model';

@Injectable({
  providedIn: 'root',
})
export class HumanResourceService {
  private getProfessionUrl = environment.API_FORMS + '/professions/get-all';
  private getSkillAll = environment.API_FORMS + '/skills/get-all';
  
  constructor(private http: HttpClient) {}

  getProfessions(): Observable<Profession[]> {
    return this.http.get(this.getProfessionUrl).pipe(
      map((response) => {
        return response as Profession[];
      })
    );
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get(this.getSkillAll).pipe(
      map((response) => {
        return response as Profession[];
      })
    );
  }
}
