import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  managestock() {
    console.log("stock");
    this.router.navigate(["stock"]);
  }

  genreports() {
    console.log("report");
    this.router.navigate(["report"]);
  }

  admindash() {
    console.log("dashboard");
    this.router.navigate(["admindash"]);
  }
}
