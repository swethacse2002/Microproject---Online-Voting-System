import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [LoginComponent]
//     });
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('Login form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });

  it('To test the component created', () => {
      const fixture = TestBed.createComponent(LoginComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'Login'`, () => {
      const fixture = TestBed.createComponent(LoginComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('Login');
    });

    it('Login form Component GUI count', () => {
      const fixture = TestBed.createComponent(LoginComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
      const inputElements = formElement.querySelectorAll("input");
      // const inputElements1 = formElement.querySelectorAll("button");
      expect(inputElements.length).toEqual(2);
      // expect(inputElements1.length).toEqual(1);
    });

    it('Login form initial value', () => {
      const fixture = TestBed.createComponent(LoginComponent);
      const app = fixture.componentInstance;
      const myFormGroup = app.myForm;
      const myFormValues = {
        emailId: "",
        password: ''
       
      };
      expect(myFormGroup.value).toEqual(myFormValues);
    });

    it('Login form valid by valid data', () => {
      const fixture = TestBed.createComponent(RegisterComponent);
      const app = fixture.componentInstance;
      app.myForm.controls?.['emailId'].setValue("70");
      app.myForm.controls?.['password'].setValue("Swetha");
      expect(app.myForm.valid).toBeFalsy();
    });



  })
