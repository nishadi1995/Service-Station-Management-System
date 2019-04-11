import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private geturl = "http://localhost:3000/api/posts/";
  private posturl = "http://localhost:3000/api/sdpost/";
  private deleteurl = "http://localhost:3000/api/delpost";
  private editurl = "http://localhost:3000/api/post";

  constructor(private http : HttpClient) { }  //instance of an http to send get requests

    getposts (): Observable<Post[]> {
      console.log("get");
      return this.http.get<Post[]>(this.geturl)
    }

   /*-----This is another alternative method----*/
    /*getposts(): Observable<Post[]> {   
      console.log("post hhhh");
      return this.http.get<HttpResponse<any>>(this.geturl).pipe(
        map(response => response.body)
      );
    }*/

    addposts (post:Post){
      console.log("add");
      return this.http.post(this.posturl,post)
        .subscribe(res=>console.log('done adding'));
    }

    deleteposts(id){
      console.log("delete");
      return this.http.delete(`${this.deleteurl}/${id}`);
    }

    updateposts(id,content){
      console.log("edit");
      const obj ={
        content : content, 
      };
      return this.http.put(`${this.editurl}/${id}`,obj)
      .subscribe(res => console.log("Done updating"));
    }
}
