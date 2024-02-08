import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Elections } from './Model/Elections';

@Injectable({
  providedIn: 'root'
})
export class ViewElectionService {

  private url: string = "http://localhost:7072";
  constructor(private http: HttpClient) { }

  getAllElectionDetails() {
    return this.http.get<Elections[]>(this.url + "/ViewAllElections");
  }
  // deleteElection(electionId:Elections){
  //   return this.http.delete(this.url+ "/DeleteElections/{electionId}").subscribe();
  // }
}
