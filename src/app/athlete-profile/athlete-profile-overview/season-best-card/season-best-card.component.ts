import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'la-season-best-card',
  standalone: true,
  imports: [NgbDropdownModule, CommonModule],
  templateUrl: './season-best-card.component.html',
  styleUrl: './season-best-card.component.css'
})
export class SeasonBestCardComponent {

  seasonYear: number = 0;
  seasonYears: Array<number> = [2002, 20024, 2005];
  selectedItem: number = 0;

  onDropDownSelect(year: number){
    this.selectedItem = year;

  }
}
