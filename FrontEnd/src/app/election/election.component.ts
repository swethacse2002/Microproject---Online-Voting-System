import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Elections } from '../Model/Elections';
import { ElectionsService } from '../elections.service';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent {

  title = 'Microproject';
  myForm: FormGroup;
  elections: Elections;
  result: string = "";
  electionList: Elections[] = []

  constructor(private service: ElectionsService) {
    this.elections = new Elections();
    this.getAllElections();

    this.myForm = new FormGroup({

      electionId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      electionName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      partyName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      date: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    })

}
insertElections(data: any) {
  this.elections.electionId = data.electionId;
  this.elections.electionName = data.electionName;
  this.elections.partyName = data.partyName;
  this.elections.date = data.date;
  this.result = this.service.insertElections(this.elections);
  this.getAllElections();
}

deleteElections(data: any) {
  this.elections.electionId = data.electionId;
  this.elections.electionName = data.electionName;
  this.elections.partyName = data.partyName;
  this.elections.date = data.date;
  this.result = this.service.deleteElections(this.elections);
  this.getAllElections();
}

updateElections(data: any) {
  this.elections.electionId = data.electionId;
  this.elections.electionName = data.electionName;
  this.elections.partyName = data.partyName;
  this.elections.date = data.date;
  this.result = this.service.updateElections(this.elections);
  this.getAllElections();
}

getAllElections() {
  this.service.getAllElectionDetails().subscribe(elect => this.electionList = elect)
}
}

