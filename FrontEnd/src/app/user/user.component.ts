import { Component } from '@angular/core';
import { Register } from '../Model/Register';
import { RegisterService } from '../register.service';
import { Elections } from '../Model/Elections';
import { ViewElectionService } from '../view-election.service';
import { UserServiceService } from '../user-service.service';
import { Polling } from '../Model/Polling';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  count : number=1;
  title = 'viewUser';
  myForm: FormGroup;
  register:Register;
  polling:Polling
  result:string="";
  regList:Register[]=[]
  pollList:Polling[]=[]

  constructor(private service : RegisterService,private use:UserServiceService){
    this.register=new Register();
    this.polling=new Polling();
    this.getAllRegister();
    this.getAllPolling();

    this.myForm=new FormGroup({

      voterId:new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      partyName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      userId: new FormControl('', [Validators.required,Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]),
      
      
    })

}

insertPolling(data: any) {
  this.polling.voterId = data.voterId;
  this.polling.partyName = data.partyName;
  this.polling.userId = data.userId;
  
  
  this.result = this.use.insertPolling(this.polling);
  this.getAllPolling();

}

getAllPolling() {
  this.use.getAllPollingDetails().subscribe(polls => this.pollList = polls)
}


getAllRegister() {
  this.service.getAllRegisterDetails().subscribe(registers => this.regList = registers)
}
}
