import { TestBed } from '@angular/core/testing';

import { AthleteObservableService } from './athlete-observable.service';

describe('AthleteObservableService', () => {
  let service: AthleteObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthleteObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
