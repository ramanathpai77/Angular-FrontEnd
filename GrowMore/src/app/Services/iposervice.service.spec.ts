import { TestBed } from '@angular/core/testing';

import { IPOServiceService } from './iposervice.service';

describe('IPOServiceService', () => {
  let service: IPOServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPOServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
