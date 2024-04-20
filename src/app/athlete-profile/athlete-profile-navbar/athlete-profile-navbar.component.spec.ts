import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteProfileNavbarComponent } from './athlete-profile-navbar.component';

describe('AthleteProfileNavbarComponent', () => {
  let component: AthleteProfileNavbarComponent;
  let fixture: ComponentFixture<AthleteProfileNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteProfileNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AthleteProfileNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
