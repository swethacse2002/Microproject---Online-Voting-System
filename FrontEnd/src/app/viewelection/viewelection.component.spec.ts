import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewelectionComponent } from './viewelection.component';

describe('ViewelectionComponent', () => {
  let component: ViewelectionComponent;
  let fixture: ComponentFixture<ViewelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewelectionComponent]
    });
    fixture = TestBed.createComponent(ViewelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
