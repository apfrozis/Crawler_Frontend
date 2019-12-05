import { TestBed } from '@angular/core/testing';

import { GamesDashboardService } from './games-dashboard.service';

describe('GamesDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamesDashboardService = TestBed.get(GamesDashboardService);
    expect(service).toBeTruthy();
  });
});
