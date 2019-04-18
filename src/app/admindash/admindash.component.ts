import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { PostService } from '../post.service';

import { Post } from '../post';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.sass'],
  providers: [PostService]

})
export class AdmindashComponent implements OnInit {

  result1:any[];
  numposts:number;
  numveh:number;
  numusers:number;
  post:Post;

  constructor(private router: Router,private _postservice: PostService) { }

  ngOnInit() {
    this. _postservice.getcount()
    .subscribe((resnumber:any[])=>{
      this.result1=resnumber;
      this.numposts = this.result1[0];
      this.numusers = this.result1[1];
      this.numveh = this.result1[2];
    });
    console.log("got #posts");
   
    /*this. _userservice.getcount()
    .subscribe((resnumber:number)=>{
      this.result1=resnumber;
    });
    console.log("got #users");*/
  }

  managestock(){
    console.log("stock");
    this.router.navigate(["login"]);
  }
}
