
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Athlete } from './athlete';
import { BehaviorSubject, Observable, catchError, debounceTime, distinctUntilChanged, filter, map, of, switchMap } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  baseUrl: string = environment.baseUrl;

  apiVers: string = "/api/v1/athlete"

  url: string = this.baseUrl + this.apiVers;

  constructor(private http: HttpClient) {}

  searchAthleteByName(name: string){
    const prefix = "/name"

    const params = new HttpParams().set('name', name);

    return this.http.get<Athlete[]>(this.url + prefix, {params}).pipe(
      catchError(err => {
        console.log("Athlete nicht gefunden", err)
        return of([]);
      })
    );
  }
  
  searchAthleteByStartpassnummer(startpassnummer: number){
    const prefix = "/startpassnummer"

    const params = new HttpParams().set('startpassnummer', startpassnummer);

    return this.http.get<Athlete[]>(this.url + prefix, {params}).pipe(
      catchError(err => {
        console.log("Athlete nicht gefunden.",err)
        return of([]);
      })
    );
  }

  searchAthlesByAgeGroup(ageGroup: string){
    const prefix = "/age-group"

    const params = new HttpParams().set('ageGroup', ageGroup);

    return this.http.get<Athlete[]>(this.url + prefix, {params});
  }
}
