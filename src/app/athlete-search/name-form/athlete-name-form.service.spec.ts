import { TestBed } from '@angular/core/testing';

import { AthleteNameFormService } from './athlete-name-form.service';

describe('AthleteNameFormService', () => {
  let service: AthleteNameFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthleteNameFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
