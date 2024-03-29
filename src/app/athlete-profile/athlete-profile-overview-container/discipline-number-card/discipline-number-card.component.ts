import { Component, Input, OnInit } from '@angular/core';
import { CompetitionService } from '../../competition-service.service';


@Component({
  selector: 'la-discipline-number-card',
  standalone: true,
  imports: [],
  templateUrl: './discipline-number-card.component.html',
  styleUrl: './discipline-number-card.component.css'
})
export class DisciplineNumberCardComponent implements OnInit {

  @Input() startpassnummer: number = 0;
  @Input() disciplineNumber: number = 0;

  constructor(private competitionService: CompetitionService){}
  
  ngOnInit(): void {

    this.getDisciplineCount();
;
  }

  getDisciplineCount(){

    this.competitionService.getDisciplineCount(this.startpassnummer).subscribe(

      count => this.disciplineNumber = count

    );

  }
  



}
