import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// describe('RegisterComponent', () => {
//   let component: RegisterComponent;
//   let fixture: ComponentFixture<RegisterComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [RegisterComponent]
//     });
//     fixture = TestBed.createComponent(RegisterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// }

// );

describe('Register form Component Test', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [RegisterComponent],
        imports: [HttpClientModule, ReactiveFormsModule]
      }).compileComponents();
    });

    it('To test the component created', () => {
        const fixture = TestBed.createComponent(RegisterComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });

      it(`should have as title 'Register Component'`, () => {
        const fixture = TestBed.createComponent(RegisterComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('Register Component');
      });

      it('Register form Component GUI count', () => {
        const fixture = TestBed.createComponent(RegisterComponent);
        const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
        const inputElements = formElement.querySelectorAll("input");
        // const inputElements1 = formElement.querySelectorAll("button");
        expect(inputElements.length).toEqual(7);
        // expect(inputElements1.length).toEqual(1);
      });

      it('Register form initial value', () => {
        const fixture = TestBed.createComponent(RegisterComponent);
        const app = fixture.componentInstance;
        const myFormGroup = app.myForm;
        const myFormValues = {
          userId: "",
          userName: '',
          emailId: "",
          voterId: '',
          age: '',
          mobile:'',
          userType: '',
          password:''
        };
        expect(myFormGroup.value).toEqual(myFormValues);
      });

      it('Register form valid by valid data', () => {
        const fixture = TestBed.createComponent(RegisterComponent);
        const app = fixture.componentInstance;
        app.myForm.controls?.['userId'].setValue("70");
        app.myForm.controls?.['userName'].setValue("Swetha");
        app.myForm.controls?.['emailId'].setValue("swe@gmail.com");
        app.myForm.controls?.['voterId'].setValue("GJ45ER45");
        app.myForm.controls?.['age'].setValue("21");
        app.myForm.controls?.['mobile'].setValue("9876544567");
        app.myForm.controls?.['userType'].setValue("User");
        app.myForm.controls?.['password'].setValue("12345");
        expect(app.myForm.valid).toBeFalsy();
      });

      it('Register form valid by invalid data', () => {
        const fixture = TestBed.createComponent(RegisterComponent);
        const app = fixture.componentInstance;
        app.myForm.controls?.['userId'].setValue(" ");
        app.myForm.controls?.['userName'].setValue(0);
        app.myForm.controls?.['emailId'].setValue(" ");
        app.myForm.controls?.['voterId'].setValue(" ");
        app.myForm.controls?.['age'].setValue(" ");
        app.myForm.controls?.['mobile'].setValue(" ");
        app.myForm.controls?.['userType'].setValue("User");
        app.myForm.controls?.['password'].setValue(" ");
        expect(app.myForm.valid).toBeFalsy();
      });
    
    
    

      


    
    
}
) 
