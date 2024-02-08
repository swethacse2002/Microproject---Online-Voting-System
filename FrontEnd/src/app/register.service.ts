import { Injectable } from '@angular/core';
import { Register } from './Model/Register';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

   private url: string = "http://localhost:7072";
  constructor(private http: HttpClient) { }

   insertRegister(register: Register) {
    this.http.post(this.url + "/Register", register).subscribe();
    return "Registered successfully";
  }

  loginUser(register : Register){
    return this.http.post(this.url+"/login",register);
  }

  

  getAllRegisterDetails() {
    return this.http.get<Register[]>(this.url + "/View");
  }
}
