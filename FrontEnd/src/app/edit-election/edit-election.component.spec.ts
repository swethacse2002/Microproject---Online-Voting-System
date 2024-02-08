import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElectionComponent } from './edit-election.component';

describe('EditElectionComponent', () => {
  let component: EditElectionComponent;
  let fixture: ComponentFixture<EditElectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditElectionComponent]
    });
    fixture = TestBed.createComponent(EditElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
