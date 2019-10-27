import { TestBed } from '@angular/core/testing';

import { StatResultsService } from './stat-results.service';

describe('StatResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatResultsService = TestBed.get(StatResultsService);
    expect(service).toBeTruthy();
  });
});
