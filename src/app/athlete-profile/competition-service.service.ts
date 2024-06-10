import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonalBest } from './personalBest';
import { Observable, catchError, of } from 'rxjs';
import { CompetitionResult } from './athlete-profile-result/CompetitionResult';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  baseUrl: string = environment.baseUrl;

  apiVers: string = "/api/v1/competition"

  url: string = this.baseUrl + this.apiVers;

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

  getCompetitionYears(startpassnummer: number){

    const prefix ="/competitionyears";

    const params = new HttpParams().set('startpassnummer', startpassnummer);

    return this.http.get<Array<number>>(this.url + prefix, {params});

  }
  
  getSeasonBest(startpassnummer: number, seasonYear: number){

    const prefix = "/seasonbest";

    const params = new HttpParams().set('startpassnummer', startpassnummer)
                                   .set('year', seasonYear); 
  
     return this.http.get<PersonalBest[]>(this.url + prefix, {params})

  }

  getCompetitionResultsByYear(startpassnummer: number, seasonYear: number): Observable<CompetitionResult> {

    const prefix = "/results"

    const params = new HttpParams().set('startpassnummer', startpassnummer)
                                   .set('year', seasonYear); 
  
     return this.http.get<CompetitionResult>(this.url + prefix, {params})

  }
}
