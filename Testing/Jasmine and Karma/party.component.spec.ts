import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyComponent } from './party.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// describe('PartyComponent', () => {
//   let component: PartyComponent;
//   let fixture: ComponentFixture<PartyComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [PartyComponent]
//     });
//     fixture = TestBed.createComponent(PartyComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


describe('Party Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartyComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });

  it('To test the component created', () => {
    const fixture = TestBed.createComponent(PartyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Party Component'`, () => {
    const fixture = TestBed.createComponent(PartyComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('PartyComponent');
  });

  it('Party Component GUI count', () => {
    const fixture = TestBed.createComponent(PartyComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    // const inputElements1 = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(3);
    // expect(inputElements1.length).toEqual(1);
  });

  it('Party initial value', () => {
    const fixture = TestBed.createComponent(PartyComponent);
    const app = fixture.componentInstance;
    const myFormGroup = app.myForm;
    const myFormValues = {
      partyId : '',
      partyName : '',
      partySymbol: ''
    };
    expect(myFormGroup.value).toEqual(myFormValues);
  });

  it('Register form valid by valid data', () => {
    const fixture = TestBed.createComponent(PartyComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['partyId'].setValue("78YUYH");
    app.myForm.controls?.['partyName'].setValue("DMK");
    app.myForm.controls?.['partySymbol'].setValue("SUN");
    expect(app.myForm.valid).toBeFalsy();
  });

  it('Register form valid by invalid data', () => {
    const fixture = TestBed.createComponent(PartyComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['partyId'].setValue(" ");
    app.myForm.controls?.['partyName'].setValue(0);
    app.myForm.controls?.['partySymbol'].setValue(" ");
   
    expect(app.myForm.valid).toBeFalsy();
  });








})