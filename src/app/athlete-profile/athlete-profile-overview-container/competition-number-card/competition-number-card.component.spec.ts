import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionNumberCardComponent } from './competition-number-card.component';

describe('CompetitionNumberCardComponent', () => {
  let component: CompetitionNumberCardComponent;
  let fixture: ComponentFixture<CompetitionNumberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitionNumberCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetitionNumberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
