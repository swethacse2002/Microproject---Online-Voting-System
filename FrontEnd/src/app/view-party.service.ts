import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Party } from './Model/Party';

@Injectable({
  providedIn: 'root'
})
export class ViewPartyService {

  private url: string = "http://localhost:7072";
  constructor(private http: HttpClient) { }

  getAllPartyDetails() {
    return this.http.get<Party[]>(this.url + "/ViewAllParty");
  }
}
