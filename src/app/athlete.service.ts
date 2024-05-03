
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Athlete } from './athlete';
import { BehaviorSubject, Observable, catchError, debounceTime, distinctUntilChanged, filter, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  url: string = "http://localhost:8080/api/v1/athlete"

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
