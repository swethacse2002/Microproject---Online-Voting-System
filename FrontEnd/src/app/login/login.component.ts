import { Component } from '@angular/core';
import { Register } from '../Model/Register';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  register : Register;
  result : string=" ";
  myForm: FormGroup;

  constructor(private service : RegisterService, private router:Router){

    this.register=new Register;
    this.myForm=new FormGroup(
      {
        emailId: new FormControl('',[Validators.required,Validators.pattern('a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]),
        password:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      }

      
    )
  }

  loginUser(data:any){
    this.register.emailId=data.emailId;
    this.register.password=data.password;
 
   this.service.loginUser(this.register).subscribe(
     (resultdata:any)=> {
       console.log(resultdata)
       if(resultdata.message=="Admin"){
        this.router.navigate(['/admin']);
     } else if(resultdata.message=="User"){
       this.router.navigate(['/User']);
     }
     else{
       alert("Invalid User");
     }
   }
  );


  }

}
