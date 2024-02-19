
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Athlete } from './athlete';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  url: string = "http://localhost:8080/api/v1/athlete"

  constructor(private http: HttpClient) { }

  searchAthleteByName(name: string){

    const prefix = "/name"

    const params = new HttpParams().set('name', name);

    return this.http.get<Athlete[]>(this.url + prefix, {params})

  }

  searchAthleteBySurname(surname: string){

    const prefix = "/surname"

    const params = new HttpParams().set('surname', surname);

    return this.http.get<Athlete[]>(this.url + prefix, {params})
  }

  searchAthleteByStartpassnummer(startpassnummer: number){

    const prefix = "/startpassnummer"

    const params = new HttpParams().set('startpassnummer', startpassnummer);

    return this.http.get<Athlete>(this.url + prefix, {params})

  }

  searchAthlesByAgeGroup(ageGroup: string){

    const prefix = "/age-group"

    const params = new HttpParams().set('ageGroup', ageGroup);

    return this.http.get<Athlete[]>(this.url + prefix, {params})

  }

}
