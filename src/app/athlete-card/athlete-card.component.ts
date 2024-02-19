import { Component, Input } from '@angular/core';
import { Athlete } from '../athlete';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'la-athlete-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './athlete-card.component.html',
  styleUrl: './athlete-card.component.css'
})
export class AthleteCardComponent {

  @Input() athlete: Athlete | null = null;

}
