import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplineNumberCardComponent } from './discipline-number-card.component';

describe('DisciplineNumberCardComponent', () => {
  let component: DisciplineNumberCardComponent;
  let fixture: ComponentFixture<DisciplineNumberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisciplineNumberCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisciplineNumberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
