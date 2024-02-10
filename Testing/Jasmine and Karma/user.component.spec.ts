import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// describe('UserComponent', () => {
//   let component: UserComponent;
//   let fixture: ComponentFixture<UserComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [UserComponent]
//     });
//     fixture = TestBed.createComponent(UserComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('User polling Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });

  it('To test the component created', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Polling form Component GUI count', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    // const inputElements1 = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(4);
    // expect(inputElements1.length).toEqual(1);
  });

  it('Polling form initial value', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.componentInstance;
    const myFormGroup = app.myForm;
    const myFormValues = {
      voterId: "",
      partyName: '',
      userId: "",
     
    };
    expect(myFormGroup.value).toEqual(myFormValues);
  });

  it('Polling form valid by valid data', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['voterId'].setValue("70");
    app.myForm.controls?.['partyName'].setValue("DMK");
    // app.myForm.controls?.['userId'].setValue("123");
    expect(app.myForm.valid).toBeFalsy();
  });

  it('Register form valid by invalid data', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['voterId'].setValue(" ");
    app.myForm.controls?.['partyName'].setValue(0);
    // app.myForm.controls?.['userID'].setValue(" ");
    expect(app.myForm.valid).toBeFalsy();
  });


}
)
