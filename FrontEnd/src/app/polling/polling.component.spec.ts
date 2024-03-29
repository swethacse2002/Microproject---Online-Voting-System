import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingComponent } from './polling.component';

describe('PollingComponent', () => {
  let component: PollingComponent;
  let fixture: ComponentFixture<PollingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PollingComponent]
    });
    fixture = TestBed.createComponent(PollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
