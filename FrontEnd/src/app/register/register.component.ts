import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from '../Model/Register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})




export class RegisterComponent {
  title = 'Microproject';
  myForm:FormGroup;
  register:Register;
  result:string="";
  regList:Register[]=[]

  constructor(private service : RegisterService){
    this.register=new Register();
    this.getAllRegister();

    this.myForm=new FormGroup({

      userId:new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      emailId: new FormControl('', [Validators.required,Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]),
      voterId: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+[0-9]')]),
      age:new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      userType: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      password: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]),

      
    })
  }

  insertRegister(data: any) {
    this.register.userId = data.userId;
    this.register.userName = data.userName;
    this.register.emailId = data.emailId;
    this.register.voterId = data.voterId;
    this.register.age = data.age;
    this.register.mobile = data.mobile;
    this.register.userType = data.userType;
    this.register.password = data.password;
    
    this.result = this.service.insertRegister(this.register);
    this.getAllRegister();

  }

  getAllRegister() {
    this.service.getAllRegisterDetails().subscribe(registers => this.regList = registers)
  }
}