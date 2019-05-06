import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

/*importing services*/
import { PostService } from '../post.service';
import { AppointmentsService } from '../appointments.service';

/*importing interfaces*/
import { Post } from '../post';
import { Appointment } from '../appointment';

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

  appointments:Appointment[];
  post:Post;
  myDate:Date;

  constructor(private router: Router,private _postservice: PostService, private _appointmentservice: AppointmentsService) { }

  /*doughnut chart data*/
  public doughnutChartLabels = ['Gold', 'Silver', 'Platinum', 'Free'];
  public doughnutChartData = [2, 5, 8, 1];
  public doughnutChartType = 'doughnut';

  /*bar chart data*/
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  ngOnInit() {

    setInterval(() => {         //replaced function() by ()=>
      this.myDate = new Date();
    }, 1000);

    this. _postservice.getcount()
    .subscribe((resnumber:any[])=>{
      this.result1=resnumber;
      this.numposts = this.result1[0];
      this.numusers = this.result1[1];
      this.numveh = this.result1[2];
    });
    console.log("got #posts");

   
    this. _appointmentservice.getappointments()
    .subscribe((resappn:Appointment[])=>{
      this.appointments=resappn;
      console.log(this.appointments);
      if (this.appointments[0].package == "Platinam"){
        console.log("ninini");
      }
    });
    
    console.log("got appointments");
  }

  managestock(){
    console.log("stock");
    this.router.navigate(["stock"]);
  }
}
