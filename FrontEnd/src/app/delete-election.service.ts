import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Elections } from './Model/Elections';

@Injectable({
  providedIn: 'root'
})
export class DeleteElectionService {

  private url: string = "http://localhost:7072";
  constructor(private http: HttpClient) { }

  deleteElections(elections: Elections) {
    this.http.delete(this.url + "/DeleteElections" + elections.electionId).subscribe();
    return "Record deleted";
  }

  getAllElectionDetails() {
    return this.http.get<Elections[]>(this.url + "/ViewAllElections");
  }
}
