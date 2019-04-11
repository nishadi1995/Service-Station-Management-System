import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*const MongoClient = require("mongodb").MongoClient;
const Express = require("express");*/
const CONNECTION_URL = "mongodb+srv://Nishadi:12345679@cluster0-7dpxi.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "service-station-managment-system";

@Injectable({
  providedIn: 'root'
})
export class ToDoItemService {
  database;
  collection;
 uri = 'http://localhost:3010/service-station';
  /*app = Express();*/

  constructor(private http: HttpClient) { 
   /* this.app.listen(3000, () => {
      MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
          if(error) {
              throw error;
          }
          this.database = client.db(DATABASE_NAME);
          this.collection = this.database.collection("people");
          console.log("Connected to `" + DATABASE_NAME + "`!");
      });
  });*/
  }

  public addTodoItem(todoItemtitle) {
  console.log(todoItemtitle);
  this.http.post(`${this.uri}/add`, todoItemtitle)
        .subscribe(res => console.log('Done'));
  }
}
