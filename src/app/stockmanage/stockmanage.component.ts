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
   this._stockservice.getstock()
    .subscribe((stock)=>{
      this.stockitems= stock;
    })
  }

 addItem(form){
    form.value.availableAmount = form.value.itemAmount;
    var formData = form.value;
    this._stockservice.addStock(formData);
    alert("Successfully added an item!");
  }

  reduceItem(){
    console.log(this.stockitems[0]);
  }
}
