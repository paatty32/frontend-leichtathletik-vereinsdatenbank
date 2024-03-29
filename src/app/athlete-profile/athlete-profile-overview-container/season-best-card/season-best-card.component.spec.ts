import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonBestCardComponent } from './season-best-card.component';

describe('SeasonBestCardComponent', () => {
  let component: SeasonBestCardComponent;
  let fixture: ComponentFixture<SeasonBestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonBestCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeasonBestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
