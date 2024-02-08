import { Component } from '@angular/core';
import { Party } from '../Model/Party';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PartyService } from '../party.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent {
  title = 'Microproject';
  myForm: FormGroup;
  party: Party;
  result: string = "";
  partyList: Party[] = []

  constructor(private service: PartyService) {
    this.party = new Party();
    this.getAllParty();

    this.myForm = new FormGroup({

      partyId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      partyName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      partySymbol: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),


    })

  }

  insertParty(data: any) {
    this.party.partyId = data.partyId;
    this.party.partyName = data.partyName;
    this.party.partySymbol = data.partySymbol;

    this.result = this.service.insertParty(this.party);
    this.getAllParty();
  }
  getAllParty() {
    this.service.getAllPartyDetails().subscribe(parties => this.partyList = parties)
  }
}
