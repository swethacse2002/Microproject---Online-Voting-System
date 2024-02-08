import { Injectable } from '@angular/core';
import { Register } from './Model/Register';
import { HttpClient } from '@angular/common/http';
import { Polling } from './Model/Polling';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url: string = "http://localhost:7072";
  constructor(private http: HttpClient) { }

 
 
  insertPolling(polling: Polling) {
    this.http.post(this.url + "/Polling", polling).subscribe();
    return "Polled successfully";
  }

  getAllPollingDetails() {
    return this.http.get<Polling[]>(this.url + "/ViewAllPoll");
  }
getAllRegisterDetails() {
  return this.http.get<Register[]>(this.url + "/View");
}
}
