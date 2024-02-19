import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AthleteService } from '../../athlete.service';
import { Athlete } from '../../athlete';
import { AthleteCardComponent } from '../../athlete-card/athlete-card.component';

@Component({
  selector: 'la-age-group-form',
  standalone: true,
  imports: [CommonModule, FormsModule, AthleteCardComponent],
  templateUrl: './age-group-form.component.html',
  styleUrl: './age-group-form.component.css'
})
export class AgeGroupFormComponent {

  ageGroups: Array<string> = ['U16', 'U18', 'U20', 'U23', 'Männer', 'Frauen'];

  defaultText: string = "Altersklasse auswählen...";
  
  selectedAgeGroup: string = this.defaultText;

  athletes: Array<Athlete> | null= null;

  constructor(private athleteService: AthleteService){}

  showSelectedAgeGroup(): void {
    console.log("Ausgewählte Altersklasse: " + this.selectedAgeGroup);
  }

  searchAthletesByAgeGroup(): void {

    if(this.selectedAgeGroup != this.defaultText){

      this.athleteService.searchAthlesByAgeGroup(this.selectedAgeGroup).subscribe( 
        data => {
          this.athletes = data;
        }
      );
    }

  }

}
