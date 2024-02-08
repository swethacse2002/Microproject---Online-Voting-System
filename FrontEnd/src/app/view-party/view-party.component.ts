import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Party } from '../Model/Party';
import { ViewPartyService } from '../view-party.service';

@Component({
  selector: 'app-view-party',
  templateUrl: './view-party.component.html',
  styleUrls: ['./view-party.component.css']
})
export class ViewPartyComponent {
  title = 'Microproject';
  // myForm: FormGroup;
  party: Party;
  result: string = "";
  partyList: Party[] = []

  constructor(private service: ViewPartyService) {
    this.party = new Party();
    this.getAllParty();
  }
  getAllParty() {
    this.service.getAllPartyDetails().subscribe(parties => this.partyList = parties)
  }
}

