import { TestBed } from '@angular/core/testing';

import { DeleteElectionService } from './delete-election.service';

describe('DeleteElectionService', () => {
  let service: DeleteElectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteElectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
