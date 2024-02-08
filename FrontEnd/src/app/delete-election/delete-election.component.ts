import { Component } from '@angular/core';
import { DeleteElectionService } from '../delete-election.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Elections } from '../Model/Elections';

@Component({
  selector: 'app-delete-election',
  templateUrl: './delete-election.component.html',
  styleUrls: ['./delete-election.component.css']
})
export class DeleteElectionComponent {

  title = 'DeleteElection';
  myForm: FormGroup;
  elections: Elections;
  result: string = "";
  electionList: Elections[] = []

  constructor(private service: DeleteElectionService) {
    this.elections = new Elections();
    this.getAllElections();

    this.myForm = new FormGroup({

      electionId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      electionName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      partyName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      date: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    })
  }

    deleteElections(data: any) {
      this.elections.electionId = data.electionId;
      this.elections.electionName = data.electionName;
      this.elections.partyName = data.partyName;
      this.elections.date = data.date;
      this.result = this.service.deleteElections(this.elections);
      this.getAllElections();
    }

    getAllElections() {
      this.service.getAllElectionDetails().subscribe(elect => this.electionList = elect);
    }
  }





