import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private url = "http://localhost:3000/api";

  constructor(private http : HttpClient) { }

  getVehicle(vnum){
    return this.http.get(`${this.url}/getVehicle/${vnum}`)
  }
}
