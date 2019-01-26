import { TestBed, inject } from '@angular/core/testing';

import { HhtpCallsService } from './hhtp-calls.service';

describe('HhtpCallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HhtpCallsService]
    });
  });

  it('should be created', inject([HhtpCallsService], (service: HhtpCallsService) => {
    expect(service).toBeTruthy();
  }));
});
