import { TestBed } from '@angular/core/testing';

import { ViewElectionService } from './view-election.service';

describe('ViewElectionService', () => {
  let service: ViewElectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewElectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
