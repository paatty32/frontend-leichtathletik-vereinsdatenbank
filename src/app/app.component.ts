import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'la-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-leichtathletik-vereinsdatenbank';
}
