import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Athlete } from '../../athlete';
import { AthleteCardComponent } from '../../athlete-card/athlete-card.component';
import { AthleteService } from '../../athlete.service';
import { AthleteObservableService } from '../athlete-observable.service';

@Component({
  selector: 'la-startpassnummer',
  standalone: true,
  imports: [FormsModule, CommonModule, AthleteCardComponent, ReactiveFormsModule],
  templateUrl: './startpassnummer.component.html',
  styleUrl: './startpassnummer.component.css'
})
export class StartpassnummerComponent implements OnInit {

  startpassnummer: number | null = null;
  athletes: Array<Athlete> = [];

  formControl: FormControl;

  $athletes = this.athleteService.athletes$;

  constructor(private athleteService: AthleteObservableService){
    this.formControl = new FormControl("", [Validators.pattern('^[0-9]*$')])
  }

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe( (searchedStartpassnummer: number) => {
      if(this.isNumber(searchedStartpassnummer)){
        this.athleteService.searchAthleteByStartpassnummer(searchedStartpassnummer)
      } else {
        console.log("Eingabe ist keine nummer")
      }
    });  
  }

  searchByStartpassnumer(): void {
    this.athleteService.searchAthleteByStartpassnummer(this.startpassnummer as number)
  }

  isNumber(input: number): boolean{
    let pattern = '^[0-9]*$';
    let regex = new RegExp(pattern);
    return regex.test(input.toString());
  }
}


