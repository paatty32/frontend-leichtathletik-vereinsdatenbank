import { Injectable } from '@angular/core';
import { AthleteService } from '../athlete.service';
import { BehaviorSubject, Observable, debounceTime, filter, map, switchMap } from 'rxjs';
import { Athlete } from '../athlete';

@Injectable({
  providedIn: 'root'
})
export class AthleteObservableService {

  private startpassnummerSubject = new BehaviorSubject<number>(0);
  private lastInputValue: number = 0;

  readonly athletes$: Observable<Athlete[]>

  constructor(private athleteService: AthleteService) { 
    const debouncedInput$ = this.startpassnummerSubject.pipe(
      map(input => input.toString()),
      filter(input => input.length >= 3),
      debounceTime(300),
      map(input => parseInt(input, 10)),
    );

    this.athletes$ = debouncedInput$.pipe(
      filter(input => input !== this.lastInputValue),
      map(input => this.lastInputValue = input),
      switchMap(input => this.athleteService.searchAthleteByStartpassnummer(input)),
    );
  }

  searchAthleteByStartpassnummer(startpassnummer: number): void{
    this.startpassnummerSubject.next(startpassnummer);
  }
}
