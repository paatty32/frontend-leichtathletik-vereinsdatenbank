import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AthleteService } from '../../athlete.service';
import { Athlete } from '../../athlete';
import { AthleteCardComponent } from '../../athlete-card/athlete-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'la-name-form',
  standalone: true,
  imports: [FormsModule, AthleteCardComponent, CommonModule],
  templateUrl: './name-form.component.html',
  styleUrl: './name-form.component.css'
})
export class NameFormComponent {

  vorname: string  = "";
  nachname: string = "";
  athletes: Array<Athlete> | null = null;

  constructor(private athleteService: AthleteService){}

  searchAthleteByName(): void{

    if(this.vorname == "" && this.nachname != ""){

      this.athleteService.searchAthleteBySurname(this.nachname).subscribe(
        data => {
          this.athletes = data;
          this.nachname = "";
        }
      );
    } else if(this.vorname != "" && this.nachname == ""){

      this.athleteService.searchAthleteByName(this.vorname).subscribe(
        data => {
          this.athletes = data
          this.vorname = "";
        }
      );

    }

  }

  

}
