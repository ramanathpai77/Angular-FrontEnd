import { TestBed } from '@angular/core/testing';

import { AddIPOServiceService } from './add-iposervice.service';

describe('AddIPOServiceService', () => {
  let service: AddIPOServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddIPOServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
