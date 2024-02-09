import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Athlete } from '../../athlete';
import { AthleteCardComponent } from '../../athlete-card/athlete-card.component';

@Component({
  selector: 'la-startpassnummer',
  standalone: true,
  imports: [FormsModule, CommonModule, AthleteCardComponent],
  templateUrl: './startpassnummer.component.html',
  styleUrl: './startpassnummer.component.css'
})
export class StartpassnummerComponent {

  startpassnummer: number | null = null;
  athletes: Array<Athlete> = []

  search(): void {
      const testAthlete = {

        startpassnummer: 1234,
        name: 'Patrick',
        surname: 'Boadu',
        ageGroup: 'Hauptklasse',

      }

      this.athletes.push(testAthlete);
  }

}


