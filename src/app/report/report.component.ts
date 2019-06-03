import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../appointments.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.sass']
})
export class ReportComponent implements OnInit {

  name_vehicle:any;
  today:String;

  constructor(private _appointmentservice: AppointmentsService, private modalService : NgbModal) { }

  ngOnInit() {
    this.today= new Date().toJSON().slice(0,10).replace(/-/g,'/');
    this._appointmentservice.getappointments()
      .subscribe((usernameAndVehivlenum)=>{
        this.name_vehicle = usernameAndVehivlenum;
      })
  }

  /*bootstrap modal component*/
  openLg(content){
  this.modalService.open(content,{size:'lg'});
  }

}
