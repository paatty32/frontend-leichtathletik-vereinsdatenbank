import { Component, Input } from '@angular/core';
import { Athlete } from '../athlete';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'la-athlete-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './athlete-card.component.html',
  styleUrl: './athlete-card.component.css'
})
export class AthleteCardComponent {

  @Input() athlete: Athlete | null = null;

}
