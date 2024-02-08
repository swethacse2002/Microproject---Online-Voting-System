import { Component } from '@angular/core';
import { EditElectionService } from '../edit-election.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Elections } from '../Model/Elections';

@Component({
  selector: 'app-edit-election',
  templateUrl: './edit-election.component.html',
  styleUrls: ['./edit-election.component.css']
})
export class EditElectionComponent {

  title = 'EditElection';
  myForm: FormGroup;
  elections: Elections;
  result: string = "";
  electionList: Elections[] = []

  constructor(private service: EditElectionService) {
    this.elections = new Elections();
    this.getAllElections();

    this.myForm = new FormGroup({

      electionId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      electionName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      partyName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      date: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    })
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
