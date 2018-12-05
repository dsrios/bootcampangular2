import { TestBed, async, inject } from '@angular/core/testing';

import { DashboardGuardGuard } from './dashboard-guard.guard';

describe('DashboardGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardGuardGuard]
    });
  });

  it('should ...', inject([DashboardGuardGuard], (guard: DashboardGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
