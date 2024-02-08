import { TestBed } from '@angular/core/testing';

import { EditElectionService } from './edit-election.service';

describe('EditElectionService', () => {
  let service: EditElectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditElectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
