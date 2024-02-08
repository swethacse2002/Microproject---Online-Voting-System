import { Component } from '@angular/core';
import { Elections } from '../Model/Elections';
import { ViewElectionService } from '../view-election.service';

@Component({
  selector: 'app-viewelection',
  templateUrl: './viewelection.component.html',
  styleUrls: ['./viewelection.component.css']
})
export class ViewelectionComponent {

  title = 'Microproject';
  // myForm: FormGroup;
  elections: Elections;
  result: string = "";
  electionList: Elections[] = []

  constructor(private service: ViewElectionService) {
    this.elections = new Elections();
    this.getAllElections();

}

// deleteElection(data:any){
// //  this.elections=this.elections.filter(this.elections => elections.electionId!== electionId);

// this.service.deleteElection(this.elections);
// }

getAllElections() {
  this.service.getAllElectionDetails().subscribe(elect => this.electionList = elect)
}
}
