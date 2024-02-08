import { Injectable } from '@angular/core';
import { Elections } from './Model/Elections';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditElectionService {

  private url: string = "http://localhost:7072";
  constructor(private http: HttpClient) { }

  updateElections(elections: Elections) {
    this.http.put(this.url + "/UpdateElections", elections).subscribe();
    return "Record updated";
  }

  getAllElectionDetails() {
    return this.http.get<Elections[]>(this.url + "/ViewAllElections");
  }

}
