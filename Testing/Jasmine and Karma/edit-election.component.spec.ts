import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElectionComponent } from './edit-election.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// describe('EditElectionComponent', () => {
//   let component: EditElectionComponent;
//   let fixture: ComponentFixture<EditElectionComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [EditElectionComponent]
//     });
//     fixture = TestBed.createComponent(EditElectionComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('Edit election form Component Test', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [EditElectionComponent],
        imports: [HttpClientModule, ReactiveFormsModule]
      }).compileComponents();
    });

    it('To test the component created', () => {
        const fixture = TestBed.createComponent(EditElectionComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it(`should have as title 'EditElection'`, () => {
        const fixture = TestBed.createComponent(EditElectionComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('EditElection');
      });

      it('Edit election form Component GUI count', () => {
        const fixture = TestBed.createComponent(EditElectionComponent);
        const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
        const inputElements = formElement.querySelectorAll("input");
        // const inputElements1 = formElement.querySelectorAll("button");
        expect(inputElements.length).toEqual(3);
        // expect(inputElements1.length).toEqual(1);
      });

      it('Edit Election form initial value', () => {
        const fixture = TestBed.createComponent(EditElectionComponent);
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
      it('Edit Election form valid by valid data', () => {
        const fixture = TestBed.createComponent(EditElectionComponent);
        const app = fixture.componentInstance;
        app.myForm.controls?.['electionId'].setValue("103");
        app.myForm.controls?.['electionName'].setValue("Parliment");
        app.myForm.controls?.['partyName'].setValue("DMK");
        expect(app.myForm.valid).toBeFalsy();
      });
    
      it('Election form valid by invalid data', () => {
        const fixture = TestBed.createComponent(EditElectionComponent);
        const app = fixture.componentInstance;
        app.myForm.controls?.['electionId'].setValue(" ");
        app.myForm.controls?.['electionName'].setValue(0);
        app.myForm.controls?.['partyName'].setValue(" ");
        expect(app.myForm.valid).toBeFalsy();
      });


}
)
