import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stockmanage',
  templateUrl: './stockmanage.component.html',
  styleUrls: ['./stockmanage.component.sass']
})
export class StockmanageComponent implements OnInit {

  stockitems:any;

  constructor(private _stockservice: StockService) { }

  ngOnInit() {
   /* this._stockservice.getstock()
    .subscribe((stock)=>{
      this.stockitems= stock;
    })*/
  }

  async addItem(form){
    var formData = form.value;
    this._stockservice.addStock(formData);
  }

}
