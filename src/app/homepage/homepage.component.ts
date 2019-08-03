import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  constructor(   
    private router: Router,
    ) {}

  ngOnInit() {
  }

  Login(){
    console.log("admindash");
    this.router.navigate(["admindash"]);
  }

  Signup(){
    console.log("signup");
    this.router.navigate(["signup"]);
  }
}
