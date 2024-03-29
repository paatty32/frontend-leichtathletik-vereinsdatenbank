import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteProfileResultComponent } from './athlete-profile-result.component';

describe('AthleteProfileResultComponent', () => {
  let component: AthleteProfileResultComponent;
  let fixture: ComponentFixture<AthleteProfileResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteProfileResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AthleteProfileResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
