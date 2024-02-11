import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Athlete } from '../../athlete';
import { AthleteCardComponent } from '../../athlete-card/athlete-card.component';
import { AthleteService } from '../../athlete.service';

@Component({
  selector: 'la-startpassnummer',
  standalone: true,
  imports: [FormsModule, CommonModule, AthleteCardComponent],
  templateUrl: './startpassnummer.component.html',
  styleUrl: './startpassnummer.component.css'
})
export class StartpassnummerComponent {

  startpassnummer: number | null = null;
  athletes: Array<Athlete> = [];

  constructor(private athleteService: AthleteService){}

  searchByStartpassnumer(): void {

    this.athleteService.searchAthleteByStartpassnummer(this.startpassnummer as number).subscribe(
      data => {
        this.athletes.push(data);
      }
    );
  
  }

}


