import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvElectionComponent } from './uv-election.component';

describe('UvElectionComponent', () => {
  let component: UvElectionComponent;
  let fixture: ComponentFixture<UvElectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UvElectionComponent]
    });
    fixture = TestBed.createComponent(UvElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
