import { Injectable } from '@angular/core';
import { Polling } from './Model/Polling';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollingService {

  private url: string = "http://localhost:7072";
  constructor(private http: HttpClient) { }

  getAllPollingDetails() {
    return this.http.get<Polling[]>(this.url + "/ViewAllPoll");
  }
}
