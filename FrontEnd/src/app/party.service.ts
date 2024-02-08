import { Injectable } from '@angular/core';
import { Party } from './Model/Party';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PartyService {
  private url: string = "http://localhost:7072";
  constructor(private http: HttpClient) { }

   insertParty(party: Party) {
    this.http.post(this.url + "/InsertParty", party).subscribe();
    return "Party added successfully";
  }

  getAllPartyDetails() {
    return this.http.get<Party[]>(this.url + "/ViewAllParty");
  }
}
