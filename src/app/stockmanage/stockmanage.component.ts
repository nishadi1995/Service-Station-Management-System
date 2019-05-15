import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stockmanage',
  templateUrl: './stockmanage.component.html',
  styleUrls: ['./stockmanage.component.sass']
})
export class StockmanageComponent implements OnInit {

  stockitems: any;
  deleteMessage: string;

  constructor(private _stockservice: StockService) { }

  ngOnInit() {
    this.deleteMessage = "";

    this._stockservice.getstock()
      .subscribe((stock) => {
        this.stockitems = stock;
      })
  }

  addItem(form) {
    form.value.availableAmount = form.value.itemAmount;
    var formData = form.value;
    this._stockservice.addStock(formData)
    alert("Successfully added an item!");
    this.stockitems.splice(0, 0, formData);  //add to table ui without reloading the table

  }

  reduceItem() {
    console.log(this.stockitems[0]);
  }

  deleteItem(itemid) {
    var r = confirm("Do you really want to remove this item from the stock?");

    if (r == true) {
      /*deleting from table(UI) without reloading the stock*/
      for (let i = 0; i < this.stockitems.length; ++i) {
        if (this.stockitems[i]._id === itemid) {
          this.stockitems.splice(i, 1);
        }
      }

      /*deleting in the database*/
      this._stockservice.deletestock(itemid).subscribe(res => {
        console.log("deleted");
        this.deleteMessage = "Post Deleted";
      });
    } else { }
  }

}
