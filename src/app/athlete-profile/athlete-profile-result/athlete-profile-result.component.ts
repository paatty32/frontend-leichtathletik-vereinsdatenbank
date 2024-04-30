import { Component, Input, OnInit } from '@angular/core';
import { CompetitionService } from '../competition-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CompetitionEntry, CompetitionResult } from './CompetitionResult';
import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'la-athlete-profile-result',
  standalone: true,
  imports: [FormsModule, CommonModule, NgbCollapseModule, NgbTooltipModule],
  templateUrl: './athlete-profile-result.component.html',
  styleUrl: './athlete-profile-result.component.css'
})
export class AthleteProfileResultComponent implements OnInit {

  seasonYears: Array<number> = [];
  selectedCompYear: number = 0;

  startpassnummer: number = 0;

  competitionsResults: CompetitionResult = {key1: []};

  isCollapsed: boolean = true;

  constructor(private competitionService: CompetitionService, private route: ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        this.startpassnummer = param['startpassnummer']
      }
    );
    this.initializeFormSelect();
  }

  private initializeFormSelect(){
    this.competitionService.getCompetitionYears(this.startpassnummer).pipe(
      switchMap(
        years => {

          this.seasonYears = years;
          this.selectedCompYear = this.seasonYears[0];

          return this.competitionService.getCompetitionResultsByYear(this.startpassnummer, this.selectedCompYear)

        })
    ).subscribe(competitions => {
        this.competitionsResults = competitions;
      });
  }

  onSelectChange($event: Event) {
    this.competitionService.getCompetitionResultsByYear(this.startpassnummer, this.selectedCompYear).subscribe(
      competitions => {
        this.competitionsResults = competitions;
    });
  }

  onDetailsClick(value: CompetitionEntry) {
    value.collapseDetails = !value.collapseDetails;
  }

  detailIsEmpty(value: CompetitionEntry){
    return value.ageGroup == null && (value.resultLink == 'nan' || value.resultLink == '-')
  }
}
