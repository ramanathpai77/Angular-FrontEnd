import { TestBed } from '@angular/core/testing';

import { AddCompanyServiceService } from './add-company-service.service';

describe('AddCompanyServiceService', () => {
  let service: AddCompanyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCompanyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
