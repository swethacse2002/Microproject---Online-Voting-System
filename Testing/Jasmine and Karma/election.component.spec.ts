import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionComponent } from './election.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// describe('ElectionComponent', () => {
//   let component: ElectionComponent;
//   let fixture: ComponentFixture<ElectionComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ElectionComponent]
//     });
//     fixture = TestBed.createComponent(ElectionComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('Election form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectionComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });
  it('To test the component created', () => {
    const fixture = TestBed.createComponent(ElectionComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Election Component'`, () => {
    const fixture = TestBed.createComponent(ElectionComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ElectionComponent');
  });

  it('Election form Component GUI count', () => {
    const fixture = TestBed.createComponent(ElectionComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    // const inputElements1 = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(3);
    // expect(inputElements1.length).toEqual(1);
  });

  it('Election form initial value', () => {
    const fixture = TestBed.createComponent(ElectionComponent);
    const app = fixture.componentInstance;
    const myFormGroup = app.myForm;
    const myFormValues = {
      electionId: "",
      electionName: '',
      partyName: "",
      date: '',
      
    };
    expect(myFormGroup.value).toEqual(myFormValues);
  });

  it('Register form valid by valid data', () => {
    const fixture = TestBed.createComponent(ElectionComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['electionId'].setValue("103");
    app.myForm.controls?.['electionName'].setValue("Parliment");
    app.myForm.controls?.['partyName'].setValue("DMK");
    expect(app.myForm.valid).toBeFalsy();
  });

  it('Register form valid by invalid data', () => {
    const fixture = TestBed.createComponent(ElectionComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['electionId'].setValue(" ");
    app.myForm.controls?.['electionName'].setValue(0);
    app.myForm.controls?.['partyName'].setValue(" ");
    expect(app.myForm.valid).toBeFalsy();
  });




})
