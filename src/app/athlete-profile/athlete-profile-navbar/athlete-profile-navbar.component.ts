import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'la-athlete-profile-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './athlete-profile-navbar.component.html',
  styleUrl: './athlete-profile-navbar.component.css'
})
export class AthleteProfileNavbarComponent  {

  @Input() startpassnummer = 0;
  
  constructor(private router: Router, private params: ActivatedRoute){

  }

  navigateToOverview() {

    this.router.navigate(['athletenuebersicht/' + this.startpassnummer], {relativeTo: this.params, skipLocationChange: true })

  }

  navigateToResult(){
    this.router.navigate(['ergebnisse/' + this.startpassnummer], {relativeTo: this.params, skipLocationChange: true })
  }


}
