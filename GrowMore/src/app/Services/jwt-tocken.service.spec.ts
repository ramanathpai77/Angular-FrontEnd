import { TestBed } from '@angular/core/testing';

import { JwtTockenService } from './jwt-tocken.service';

describe('JwtTockenService', () => {
  let service: JwtTockenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtTockenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
