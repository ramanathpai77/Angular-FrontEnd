import { Component, OnInit } from '@angular/core';
import { IPOServiceService } from '../Services/iposervice.service';


@Component({
  selector: 'app-manage-ipo',
  templateUrl: './manage-ipo.component.html',
  styleUrls: ['./manage-ipo.component.css']
})
export class ManageIPOComponent implements OnInit {
 IPO :any=[];
  constructor(private ipo: IPOServiceService) { }

  ngOnInit(): void {
    this.ipo.getIPO().subscribe(
      data => {
        console.log(data);
        this.IPO = data;
      },
      err => {
        console.log(err);
      }
    );
    
  }

}
