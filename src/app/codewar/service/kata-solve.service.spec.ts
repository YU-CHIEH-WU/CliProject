import { TestBed, inject } from '@angular/core/testing';

import { KataSolveService } from './kata-solve.service';

describe('KataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KataSolveService]
    });
  });

  it('should be created', inject([KataSolveService], (service: KataSolveService) => {
    expect(service).toBeTruthy();
  }));
});
