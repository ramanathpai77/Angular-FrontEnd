import { TestBed } from '@angular/core/testing';

import { OnlyAuthenticatedUserGuard } from './only-authenticated-user.guard';

describe('OnlyAuthenticatedUserGuard', () => {
  let guard: OnlyAuthenticatedUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyAuthenticatedUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
