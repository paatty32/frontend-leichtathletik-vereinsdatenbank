import { Component, Input } from '@angular/core';

@Component({
  selector: 'la-discipline-number-card',
  standalone: true,
  imports: [],
  templateUrl: './discipline-number-card.component.html',
  styleUrl: './discipline-number-card.component.css'
})
export class DisciplineNumberCardComponent {

  @Input() startpassnummer: number = 0;
  @Input() disciplineNumber: number = 0;

}
