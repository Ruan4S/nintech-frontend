import { TestBed } from '@angular/core/testing';

import { FreelancerApiService } from './freelancer-api.service';

describe('FreelancerApiService', () => {
  let service: FreelancerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreelancerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
