import { TestBed } from '@angular/core/testing';

import { HoteliService } from './korisnici.service';

describe('HoteliService', () => {
  let service: HoteliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoteliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
