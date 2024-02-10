import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingComponent } from './polling.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// describe('PollingComponent', () => {
//   let component: PollingComponent;
//   let fixture: ComponentFixture<PollingComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [PollingComponent]
//     });
//     fixture = TestBed.createComponent(PollingComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('Polling Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PollingComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });

  it('To test the component created', () => {
    const fixture = TestBed.createComponent(PollingComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Polling Component'`, () => {
    const fixture = TestBed.createComponent(PollingComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Polling Component');
  });

 
 






}
)
