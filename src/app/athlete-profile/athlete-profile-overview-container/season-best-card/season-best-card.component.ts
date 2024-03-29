import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CompetitionService } from '../../competition-service.service';
import { PersonalBest } from '../../personalBest';
import { catchError, map, of, switchMap, throwError } from 'rxjs';

@Component({
  selector: 'la-season-best-card',
  standalone: true,
  imports: [NgbDropdownModule, CommonModule],
  templateUrl: './season-best-card.component.html',
  styleUrl: './season-best-card.component.css'
})
export class SeasonBestCardComponent implements OnInit {

  seasonYear: number = 0;
  seasonYears: Array<number> = [];
  selectedItem: number = 0;

  @Input() startpassnummer: number = 0;

  seasonBests: Array<PersonalBest> = [];


  constructor(private competitionService: CompetitionService){
    

  }
  ngOnInit(): void {
  
    this.initializeActualSeasonBest();
    
    this.getSeasonBests();

    
  }

  onDropDownSelect(year: number){
    
    this.selectedItem = year;

    this.getSeasonBests();

  }

   initializeActualSeasonBest(){

      this.competitionService.getCompetitionYears(this.startpassnummer).pipe(
        
        catchError(err => {
          console.error("Ungültige Startpassnummer", err)
          return of([])
        }),
        switchMap(years => {

          this.seasonYears = years
          this.selectedItem = this.seasonYears[0];
  
          return this.competitionService.getSeasonBest(this.startpassnummer, this.selectedItem).pipe(

            catchError(err => {
              return throwError(() => err)
            })
          );
        })
      ).subscribe(seasonBests => {
  
        this.seasonBests = seasonBests;
  
      });
  
  }


  getSeasonBests(){

    if(this.startpassnummer !== 0 && this.selectedItem !==0){
      this.competitionService.getSeasonBest(this.startpassnummer, this.selectedItem).pipe(

        catchError(err => {
          return throwError(() => err)
        }),
      ).subscribe(

        seasonBests => {
          this.seasonBests = seasonBests;
        }

      )};
  }
}
