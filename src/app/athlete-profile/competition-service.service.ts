import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonalBest } from './personalBest';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  url: string = "http://localhost:8080/api/v1/competition"

  constructor(private http: HttpClient) { }

  getPersonalBestsOfAthlete(startpassnummer: number){

    const prefix = "/personalbest";

    const params = new HttpParams().set('startpassnummer', startpassnummer);

    return this.http.get<PersonalBest[]>(this.url + prefix, {params});

  }

  getDCompetitionCount(startpassnummer: number){

    const prefix = "/count";

    const params = new HttpParams().set('startpassnummer', startpassnummer);

    return this.http.get<number>(this.url + prefix, {params});

  }

  getDisciplineCount(startpassnummer: number){

    const prefix = "/countdiscipline";

    const params = new HttpParams().set('startpassnummer', startpassnummer);

    return this.http.get<number>(this.url + prefix, {params});

  }
}
