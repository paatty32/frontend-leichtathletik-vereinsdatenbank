import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Athlete } from '../../athlete';
import { AthleteCardComponent } from '../../athlete-card/athlete-card.component';
import { CommonModule } from '@angular/common';
import { AthleteNameFormService } from './athlete-name-form.service';

@Component({
  selector: 'la-name-form',
  standalone: true,
  imports: [FormsModule, AthleteCardComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './name-form.component.html',
  styleUrl: './name-form.component.css'
})
export class NameFormComponent implements OnInit {

  athletes: Array<Athlete> | null = null;
  nameFormControl: FormControl;

  $athletes = this.athleteService.athletes$;

  constructor(private athleteService: AthleteNameFormService){
    this.nameFormControl = new FormControl();
  }

  ngOnInit(): void {
    this.nameFormControl.valueChanges.subscribe((inputName: string) => {
      this.athleteService.searchAthleteByName((inputName));
    })
  }
}
