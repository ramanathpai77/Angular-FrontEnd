import { Component, OnInit } from '@angular/core';
import { SE } from '../SE';
import { StockExchangeServiceService } from '../Services/stock-exchange-service.service';

@Component({
  selector: 'app-add-stockexchange',
  templateUrl: './add-stockexchange.component.html',
  styleUrls: ['./add-stockexchange.component.css']
})
export class AddStockexchangeComponent implements OnInit {
obj:SE
  constructor(private s:StockExchangeServiceService) {
    this.obj = new SE();
   }

  ngOnInit(): void {
  }
  save()
  {
    console.log(this.obj);
    this.s.savese(this.obj).subscribe(
      data => {
        alert('Saved successfully');
      },
      err => {
        alert('Error saving');
        console.log(err);
      }
    );
  }

}
