import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteElectionComponent } from './delete-election.component';

describe('DeleteElectionComponent', () => {
  let component: DeleteElectionComponent;
  let fixture: ComponentFixture<DeleteElectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteElectionComponent]
    });
    fixture = TestBed.createComponent(DeleteElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
