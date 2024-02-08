import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartpassnummerComponent } from './startpassnummer.component';

describe('StartpassnummerComponent', () => {
  let component: StartpassnummerComponent;
  let fixture: ComponentFixture<StartpassnummerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartpassnummerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartpassnummerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
