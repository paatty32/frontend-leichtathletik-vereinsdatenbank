import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeGroupFormComponent } from './age-group-form.component';

describe('AgeGroupFormComponent', () => {
  let component: AgeGroupFormComponent;
  let fixture: ComponentFixture<AgeGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeGroupFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgeGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
