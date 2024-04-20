import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionService } from '../../competition-service.service';
import { PersonalBest } from '../../personalBest';


@Component({
  selector: 'la-personal-best-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-best-card.component.html',
  styleUrl: './personal-best-card.component.css'
})
export class PersonalBestCardComponent implements OnInit {

  personalBests: Array<PersonalBest> = [];
  @Input() startpassnummer: number = 0;

  constructor(private competitionService: CompetitionService){}
  
  
  ngOnInit(): void {

    this.getPersonalBests()
  }

  getPersonalBests(): void {

    if(this.startpassnummer !== 0){
      this.competitionService.getPersonalBestsOfAthlete(this.startpassnummer).subscribe(
        data => {
          this.personalBests = data;
        }
      )
    } else {
      console.log('There is no startpassnummer', this.startpassnummer)
    }


  }

}
