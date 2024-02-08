import { Component } from '@angular/core';
import { PollingService } from '../polling.service';
import { Polling } from '../Model/Polling';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.css']
})
export class PollingComponent {

  title = 'Microproject';
  myForm: FormGroup;
  polling: Polling;
  result: string = "";
  pollList: Polling[] = []

  constructor(private service: PollingService) {
    this.myForm = new FormGroup({

      voterId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      partyName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
    
    
    })
    this.polling = new Polling();
    this.getAllPolling();

}




getAllPolling() {
  this.service.getAllPollingDetails().subscribe(poll => this.pollList = poll)
}


}
