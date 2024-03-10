import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBestCardComponent } from './personal-best-card.component';

describe('PersonalBestCardComponent', () => {
  let component: PersonalBestCardComponent;
  let fixture: ComponentFixture<PersonalBestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalBestCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalBestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
