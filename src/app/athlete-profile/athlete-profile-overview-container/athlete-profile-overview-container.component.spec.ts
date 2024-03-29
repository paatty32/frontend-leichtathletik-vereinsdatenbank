import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteProfileOverviewContainerComponent } from './athlete-profile-overview-container.component';

describe('AthleteProfileOverviewContainerComponent', () => {
  let component: AthleteProfileOverviewContainerComponent;
  let fixture: ComponentFixture<AthleteProfileOverviewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteProfileOverviewContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AthleteProfileOverviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
