import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private url = "http://localhost:3000/api";

  constructor(private http : HttpClient) { }

  public addStock(item){
    return this.http.post(`${this.url}/addItem`,item)
      .subscribe(res=>console.log('done adding'));
  }

  public getstock(){
    return this.http.get(`${this.url}/getitems`);      //returning without an stock item interface
  }
}
