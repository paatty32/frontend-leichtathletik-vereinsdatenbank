import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, debounceTime, filter, map, switchMap } from 'rxjs';
import { Athlete } from '../../athlete';
import { AthleteService } from '../../athlete.service';

@Injectable({
  providedIn: 'root'
})
export class AthleteNameFormService {

  private nameSubject = new BehaviorSubject<string>("");
  
  readonly athletes$: Observable<Athlete[]>;

  private lastInputValue: string = "";

  constructor(private athleteService: AthleteService) {
    const debouncedInput$ = this.nameSubject.pipe(
      filter(input => input.length >= 3),
      debounceTime(300),
    );

    this.athletes$ = debouncedInput$.pipe(
      filter(input => input !== this.lastInputValue),
      map(input => this.lastInputValue = input),
      switchMap(input => this.athleteService.searchAthleteByName(input))
    );
   }

  searchAthleteByName(input: string) {
    this.nameSubject.next(input);
  }
}
