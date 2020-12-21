import { TestBed } from '@angular/core/testing';

import { AddStockExchangeServiceService } from './add-stock-exchange-service.service';

describe('AddStockExchangeServiceService', () => {
  let service: AddStockExchangeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddStockExchangeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
