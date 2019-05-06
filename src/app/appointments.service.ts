import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  
  private url = "http://localhost:3000/api";

  constructor(private http : HttpClient) { }

  public getappointments():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.url}/appointments`);
  }

}
