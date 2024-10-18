import { TestBed } from '@angular/core/testing';

import { DjelatniciService } from './njegovatelji.service';

describe('DjelatniciService', () => {
  let service: DjelatniciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DjelatniciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
