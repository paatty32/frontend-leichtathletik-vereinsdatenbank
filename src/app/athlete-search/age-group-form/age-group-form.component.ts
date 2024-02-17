import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'la-age-group-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './age-group-form.component.html',
  styleUrl: './age-group-form.component.css'
})
export class AgeGroupFormComponent {

  ageGroups: Array<string> = ['U16', 'U18', 'U20', 'U23', 'Männer', 'Frauen'];
  
  selectedAgeGroup: string = "Altersklasse auswählen...";

  showSelectedAgeGroup(): void {
    console.log("Ausgewählte Altersklasse: " + this.selectedAgeGroup);
  }

}
