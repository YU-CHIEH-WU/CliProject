import { TestBed, inject } from '@angular/core/testing';

import { KataDataService } from './kata-data.service';

describe('KataDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KataDataService]
    });
  });

  it('should be created', inject([KataDataService], (service: KataDataService) => {
    expect(service).toBeTruthy();
  }));
});
