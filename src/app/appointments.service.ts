import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Appointment } from './appointment';  //interface is not neccessary if we use the other method 

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  
  private url = "http://localhost:3000/api";

  constructor(private http : HttpClient) { }

  /*public getappointments(){
    return this.http.get(`${this.url}/appointments`);
  } 
  or below method*/

  public getappointments():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.url}/appointments`);
  }
}
