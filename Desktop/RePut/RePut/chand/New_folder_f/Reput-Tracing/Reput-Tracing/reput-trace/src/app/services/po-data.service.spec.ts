import { TestBed } from '@angular/core/testing';

import { PoDataService } from './po-data.service';

describe('PoDataService', () => {
  let service: PoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
