import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AthleteProfileNavbarComponent } from '../athlete-profile-navbar/athlete-profile-navbar.component';
import { CompetitionNumberCardComponent } from './competition-number-card/competition-number-card.component';
import { DisciplineNumberCardComponent } from './discipline-number-card/discipline-number-card.component';
import { PersonalBestCardComponent } from './personal-best-card/personal-best-card.component';
import { SeasonBestCardComponent } from './season-best-card/season-best-card.component';


@Component({
  selector: 'la-athlete-profile-overview-container',
  standalone: true,
  imports: [AthleteProfileNavbarComponent, 
            CompetitionNumberCardComponent, 
            DisciplineNumberCardComponent, 
            PersonalBestCardComponent,
            SeasonBestCardComponent],
  templateUrl: './athlete-profile-overview-container.component.html',
  styleUrl: './athlete-profile-overview-container.component.css'
})
export class AthleteProfileOverviewContainerComponent {

  startpassnummer = 0;
  name = "";
  surname = "";
  ageGroup = "";

  constructor(private route: ActivatedRoute){

  }
  
  ngOnInit(): void {
      this.route.params.subscribe(
        param => {
          this.name = param['name'];
          this.surname = param['nachname'];
          this.ageGroup = param['altersklasse'];
          this.startpassnummer = param['startpassnummer']
        }
      )
  }

}
