import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Elections } from './Model/Elections';

@Injectable({
  providedIn: 'root'
})
export class ElectionsService {

  private url: string = "http://localhost:7072";
  constructor(private http: HttpClient) { }

  insertElections(elections: Elections) {
    this.http.post(this.url + "/InsertElections", elections).subscribe();
    return "Election Added successfully ! ";
  }

  deleteElections(elections: Elections) {
    this.http.delete(this.url + "/DeleteElections" + elections.electionId).subscribe();
    return "Record deleted";
  }
  updateElections(elections: Elections) {
    this.http.put(this.url + "/UpdateElections", elections).subscribe();
    return "Record updated";
  }

  getAllElectionDetails() {
    return this.http.get<Elections[]>(this.url + "/ViewAllElections");
  }

}
