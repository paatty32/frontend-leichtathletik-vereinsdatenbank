import { Component, Input, OnInit } from '@angular/core';
import { CompetitionService } from '../../competition-service.service';


@Component({
  selector: 'la-competition-number-card',
  standalone: true,
  imports: [],
  templateUrl: './competition-number-card.component.html',
  styleUrl: './competition-number-card.component.css'
})
export class CompetitionNumberCardComponent implements OnInit {

  @Input() startpassnummer = 0;
  @Input() competitionNumber: number = 0;

  constructor(private competitionService: CompetitionService){}

  getDiciplineCount(): void {

    this.competitionService.getDCompetitionCount(this.startpassnummer)
      .subscribe(count => this.competitionNumber = count);
    
  }

  ngOnInit(): void {

    this.getDiciplineCount();

  }

}
