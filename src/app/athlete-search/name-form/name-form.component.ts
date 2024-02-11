import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'la-name-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './name-form.component.html',
  styleUrl: './name-form.component.css'
})
export class NameFormComponent {

  vorname: string = "";
  nachname: string = "";

}
