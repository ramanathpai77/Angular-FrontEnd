import { Component, OnInit } from '@angular/core';
import { IPOServiceService } from '../Services/iposervice.service';
@Component({
  selector: 'app-manage-stock-exchanges',
  templateUrl: './manage-stock-exchanges.component.html',
  styleUrls: ['./manage-stock-exchanges.component.css']
})
export class ManageStockExchangesComponent implements OnInit {
  SE :any=[];
  constructor(private ipo: IPOServiceService) { }

  ngOnInit(): void {
    this.ipo.getSE().subscribe(
      data => {
        console.log(data);
        this.SE = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
