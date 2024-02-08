import { TestBed } from '@angular/core/testing';

import { ViewPartyService } from './view-party.service';

describe('ViewPartyService', () => {
  let service: ViewPartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPartyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
