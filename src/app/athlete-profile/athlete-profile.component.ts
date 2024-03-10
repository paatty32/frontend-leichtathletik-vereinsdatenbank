import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { AthleteProfileNavbarComponent } from './athlete-profile-navbar/athlete-profile-navbar.component';
import { CompetitionNumberCardComponent } from './athlete-profile-overview/competition-number-card/competition-number-card.component';
import { DisciplineNumberCardComponent } from './athlete-profile-overview/discipline-number-card/discipline-number-card.component';
import { PersonalBestCardComponent } from './athlete-profile-overview/personal-best-card/personal-best-card.component';
import { SeasonBestCardComponent } from './athlete-profile-overview/season-best-card/season-best-card.component';

@Component({
  selector: 'la-athlete-profile',
  standalone: true,
  imports: [AthleteProfileNavbarComponent, CompetitionNumberCardComponent, DisciplineNumberCardComponent, PersonalBestCardComponent,
    SeasonBestCardComponent, RouterOutlet],
  templateUrl: './athlete-profile.component.html',
  styleUrl: './athlete-profile.component.css'
})
export class AthleteProfileComponent implements OnInit {

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
