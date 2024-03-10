import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'la-athlete-profile-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './athlete-profile-navbar.component.html',
  styleUrl: './athlete-profile-navbar.component.css'
})
export class AthleteProfileNavbarComponent implements OnInit {

  startpassnummer = 0;
  name = "";
  surname = "";
  ageGroup = "";

  constructor(private router: Router, private params: ActivatedRoute){

  }
  ngOnInit(): void {
      
  }
}
