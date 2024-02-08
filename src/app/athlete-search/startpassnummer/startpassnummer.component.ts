import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'la-startpassnummer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './startpassnummer.component.html',
  styleUrl: './startpassnummer.component.css'
})
export class StartpassnummerComponent {

  startpassnummer: number | null = null;

}
