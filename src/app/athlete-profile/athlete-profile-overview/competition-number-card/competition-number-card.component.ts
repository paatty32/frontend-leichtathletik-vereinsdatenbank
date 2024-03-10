import { Component, Input } from '@angular/core';

@Component({
  selector: 'la-competition-number-card',
  standalone: true,
  imports: [],
  templateUrl: './competition-number-card.component.html',
  styleUrl: './competition-number-card.component.css'
})
export class CompetitionNumberCardComponent {

  @Input() startpassnummer = 0;
  @Input() competitionNumber: number = 0;


}
